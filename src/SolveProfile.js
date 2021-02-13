import { Matrix } from 'ml-matrix';
import { fcnnlsVector } from 'ml-fcnnls';

import mineralProfiles from './data/mineral_profiles.json';

export default function solveWaterChemistry (sourceProfile, targetProfile, availableMinerals, nLitres) {
  const waterVolume = (nLitres || 1.0);

  // store keys to ensure dictionaries are traversed in the same order
  const ionNames = Object.keys(sourceProfile);
  const allMinerals = mineralProfiles.map((m) => m.mineral);

  // add (or fill) margins of error
  let margins = {};
  if (targetProfile['margin']) {
    margins = targetProfile['margin'];
  } else {
    for (let i = 0; i < ionNames.length; i++) {
      const ion = ionNames[i];
      margins[ion] = 1.0;
    }
  }

  // if "in stock" minerals empty or undefined, assume all in stock
  if (availableMinerals === null ||
      availableMinerals === undefined ||
      Object.keys(availableMinerals).length === 0) {
    let availableMinerals = {};
    for (let i = 0; i < allMinerals.length; i++) {
      const mineral = allMinerals[i];
      availableMinerals[mineral] = true;
    }
  };

  // filter for allowable minerals
  const mineralNames = allMinerals.filter((m) => availableMinerals[m]);

  // scale target variables according to the acceptable margin of error
  const y = ionNames.map((ion) => ((targetProfile[ion] - sourceProfile[ion]) / margins[ion]));

  // traverse mineral contribution data
  let X = [];
  for (let i = 0; i < ionNames.length; i++) {
    let X_row = [];
    const ion = ionNames[i];
    for (let j = 0; j < mineralNames.length; j++) {
      const mineralName = mineralNames[j];
      for (let k = 0; k < mineralProfiles.length; k++) {
        const mineral = mineralProfiles[k];
        if (mineral['mineral'] === mineralName) {
          const mineralValue = parseFloat(mineral[ion] || 0.0) / margins[ion];
          X_row.push(mineralValue);
        }
      };
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
    let mineralName = mineralNames[i];
    const unscaledValue = w[i];
    const scaledValue = (unscaledValue * waterVolume);
    wUnscaled[mineralName] = 0.0;
    wScaled[mineralName] = 0.0;
    if (! isNaN(scaledValue)) {
      wScaled[mineralName] = scaledValue;
      wUnscaled[mineralName] = unscaledValue;
    }
  };

  // finally, reconstruct apparent profile
  let apparentProfile = {};
  for (let i = 0; i < mineralNames.length; i++) {
    const mineralName = mineralNames[i];
    for (let j = 0; j < mineralProfiles.length; j++) {
      const mineral = mineralProfiles[j];
      if (mineral['mineral'] === mineralName) {
        const scaledValue = w[i];
        if (!isNaN(scaledValue)) {
          for (let k = 0; k < ionNames.length; k++) {
            const ion = ionNames[k];
            const mineralValue = parseFloat(mineral[ion] || 0.0);
            const contribution = mineralValue * scaledValue;
            apparentProfile[ion] = parseFloat(apparentProfile[ion] || sourceProfile[ion]) + contribution;
          }
        }
      }
    };
  }

  // ensure all fields are populated
  for (let i = 0; i < ionNames.length; i++) {
    let mineral = mineralNames[i];
    if (wUnscaled[mineral] === undefined || wUnscaled[mineral] === null) {
      wUnscaled[mineral] = 0.0;
    } else {
      wUnscaled[mineral] = parseFloat(wUnscaled[mineral]);
    }

    if (wScaled[mineral] === undefined || wScaled[mineral] === null) {
      wScaled[mineral] = 0.0;
    } else {
      wScaled[mineral] = parseFloat(wScaled[mineral]);
    }
  }

  for (let i = 0; i < ionNames.length; i++) {
    let ion = ionNames[i];
    if (apparentProfile[ion] === undefined || apparentProfile[ion] === null) {
      apparentProfile[ion] = 0.0;
    } else {
      apparentProfile[ion] = parseFloat(apparentProfile[ion]);
    }
  }

  // define the return object
  const solvedProfile = {
    unscaledAdditions: wUnscaled,
    scaledAdditions: wScaled,
    apparentProfile: apparentProfile
  };

  return solvedProfile;
};