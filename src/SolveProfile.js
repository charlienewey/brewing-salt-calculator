import { Matrix } from 'ml-matrix';
import { fcnnlsVector } from 'ml-fcnnls';

import MineralProfiles from './data/mineral_profiles.json';

export default function solveWaterChemistry (sourceProfile, targetProfile, nLitres) {
  // traverse both dictionaries in the same order
  const ionNames = Object.keys(sourceProfile);

  // scale target variables to 1.0 - i.e. use MAPE rather than MSE as objective func
  let y = ionNames.map((ion) => (targetProfile[ion] - sourceProfile[ion]) / targetProfile[ion]);

  // traverse mineral contribution data
  let X = [];
  let mineralNames = Object.keys(MineralProfiles);
  for (let i = 0; i < ionNames.length; i++) {
    let X_row = [];
    for (let j = 0; j < mineralNames.length; j++) {
      let ion = ionNames[i];
      let mineralValue = (((MineralProfiles[j][ion] || 0.0) / targetProfile[ion]) || 0.0);
      X_row.push(mineralValue);
    }
    X.push(X_row);
  };
  
  // create NNLS matrix
  let Xm = new Matrix(X);

  // compute result
  let w = fcnnlsVector(Xm, y);

  // convert result into a dictionary
  let w_return = {};
  for (let i = 0; i < mineralNames.length; i++) {
    let scaledValue = ((w[i] / y[i]) * nLitres).toFixed(2);
    if (isNaN(scaledValue)) {
      w_return[MineralProfiles[i]['mineral']] = "0.0";
    } else {
      w_return[MineralProfiles[i]['mineral']] = scaledValue;
    }
  };

  return w_return;
};