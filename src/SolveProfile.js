import { Matrix } from 'ml-matrix';
import { fcnnlsVector } from 'ml-fcnnls';

import mineralProfiles from './data/mineral_profiles.json';

export default function solveWaterChemistry (sourceProfile, targetProfile, nLitres) {
  // store keys to ensure dictionaries are traversed in the same order
  const ionNames = Object.keys(sourceProfile);
  const mineralNames = mineralProfiles.map((m) => m.mineral);

  // scale target variables to 1.0 - i.e. use MAPE rather than MSE as objective func
  const y = ionNames.map((ion) => (targetProfile[ion] - sourceProfile[ion]) / targetProfile[ion]);

  // traverse mineral contribution data
  let X = [];
  for (let i = 0; i < ionNames.length; i++) {
    let X_row = [];
    for (let j = 0; j < mineralNames.length; j++) {
      const ion = ionNames[i];
      const mineralValue = (((mineralProfiles[j][ion] || 0.0) / targetProfile[ion]) || 0.0);
      X_row.push(mineralValue);
    }
    X.push(X_row);
  };
  
  // create NNLS matrix
  const Xm = new Matrix(X);

  // compute result
  const w = fcnnlsVector(Xm, y);

  // convert result into a dictionary
  let wUnscaled = {};
  let wScaled = {};
  for (let i = 0; i < mineralNames.length; i++) {
    const unscaledValue = (w[i] / y[i]);
    const scaledValue = (unscaledValue * nLitres);
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
    const scaledValue = (w[i] / y[i]);
    if (! isNaN(scaledValue) ) {
      for  (let j = 0; j < ionNames.length; j++) {
        const ion = ionNames[j];
        const contribution = (mineral[ion] || 0.0) * scaledValue;
        apparentProfile[ion] = (apparentProfile[ion] || sourceProfile[ion]) + contribution;
      }
    }
  }

  return {
    unscaledAdditions: wUnscaled,
    scaledAdditions: wScaled,
    apparentProfile: apparentProfile
  };
};