import { Matrix } from 'ml-matrix';
import { fcnnlsVector } from 'ml-fcnnls';

import mineralProfiles from './data/mineral_profiles.json';

export default function solveWaterChemistry (sourceProfile, targetProfile, availableMinerals, nLitres) {
  const waterVolume = (nLitres || 1.0);

  // store keys to ensure dictionaries are traversed in the same order
  const ionNames = Object.keys(sourceProfile);
  const allMinerals = mineralProfiles.map((m) => m.mineral);
  
  // if "in stock" minerals empty or undefined, assume all in stock
  if (availableMinerals === null ||
      availableMinerals === undefined ||
      Object.keys(availableMinerals).length === 0) {
    let availableMinerals = {};
    for (let i = 0; i < allMinerals.length; i++) {
      let mineral = allMinerals[i];
      availableMinerals[mineral] = true;
    }
  };

  // filter for allowable minerals
  const mineralNames = allMinerals.filter((m) => availableMinerals[m]);

  // scale target variables to 1.0 - i.e. use MAPE rather than MSE as objective func
  const y = ionNames.map((ion) => (targetProfile[ion] - sourceProfile[ion]));

  // traverse mineral contribution data
  let X = [];
  for (let i = 0; i < ionNames.length; i++) {
    let X_row = [];
    let ion = ionNames[i];
    for (let j = 0; j < mineralNames.length; j++) {
      let mineral = mineralProfiles[j];
      const mineralValue = ((mineral[ion] || 0.0) || 0.0);
      X_row.push(mineralValue);
    };
    X.push(X_row);
  };
  
  // create NNLS matrix
  const Xm = new Matrix(X);

  // compute result
  const options = {maxIterations: 1000};
  const w = fcnnlsVector(Xm, y, options);

  // convert result into a dictionary
  let wUnscaled = {};
  let wScaled = {};
  for (let i = 0; i < mineralNames.length; i++) {
    const unscaledValue = w[i];
    const scaledValue = (unscaledValue * waterVolume);
    wUnscaled[mineralProfiles[i]['mineral']] = 0.0;
    wScaled[mineralProfiles[i]['mineral']] = 0.0;
    if (! isNaN(scaledValue)) {
      wScaled[mineralProfiles[i]['mineral']] = scaledValue;
      wUnscaled[mineralProfiles[i]['mineral']] = unscaledValue;
    }
  };

  // finally, reconstruct apparent profile
  let apparentProfile = {};
  for (let i = 0; i < mineralNames.length; i++) {
    const mineral = mineralProfiles[i];
    const scaledValue = w[i];
    if (! isNaN(scaledValue) ) {
      for  (let j = 0; j < ionNames.length; j++) {
        const ion = ionNames[j];
        const contribution = (mineral[ion] || 0.0) * scaledValue;
        apparentProfile[ion] = (apparentProfile[ion] || sourceProfile[ion]) + contribution;
      }
    }
  }

  const solvedProfile = {
    unscaledAdditions: wUnscaled,
    scaledAdditions: wScaled,
    apparentProfile: apparentProfile
  };

  return solvedProfile;
};