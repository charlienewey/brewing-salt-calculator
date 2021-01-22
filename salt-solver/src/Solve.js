import { Matrix } from 'ml-matrix';
import { fcnnlsVector } from 'ml-fcnnls';

import MineralProfiles from './data/mineral_profiles.json';

export default function solveWaterChemistry (sourceProfile, targetProfile, nLitres) {
  // traverse both dictionaries in the same order
  const ionNames = Object.keys(sourceProfile);
  let y = ionNames.map((ion) => targetProfile[ion] - sourceProfile[ion]);

  // traverse mineral contribution data
  let X = [];
  let mineralNames = Object.keys(MineralProfiles);
  for (let i = 0; i < ionNames.length; i++) {
    let X_row = [];
    for (let j = 0; j < mineralNames.length; j++) {
      X_row.push(MineralProfiles[i][ionNames[j]] || 0.0);
    }
    X.push(X_row);
  };
  
  // create NNLS matrix
  let Xm = new Matrix(X);

  // compute result
  let w = fcnnlsVector(Xm, y);

  // convert result into a dictionary
  console.log(MineralProfiles);
  console.log(mineralNames);

  let w_return = {};
  for (let i = 0; i < mineralNames.length; i++) {
    w_return[MineralProfiles[i]['mineral']] = (w[i] * nLitres).toFixed(1);
  };

  return w_return;
};