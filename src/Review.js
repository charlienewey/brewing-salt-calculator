import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import solveWaterChemistry from './SolveProfile';
import mineralProfiles from './data/mineral_profiles.json';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function copyObjectWithDefaults(keys, target, defaultValue) {
  let newObject = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (target && target[key]) {
      newObject[key] = target[key];
    } else {
      newObject[key] = defaultValue;
    }
  };
  return newObject;
};

export default function Review(props) {
  const classes = useStyles();

  const source = {...props.state.sourceProfile};
  const target = {...props.state.targetProfile};

  const availableMinerals = props.state.brewingProfile.availableMinerals;
  const waterVolume = parseFloat(props.state.brewingProfile.waterVolume);

  const minerals = mineralProfiles.map((m) => m.mineral);
  const ions = Object.keys(source);

  let solved = {};
  let scaledMineralAdditions = {};
  let unscaledMineralAdditions = {};

  if (JSON.stringify(source) !== JSON.stringify(target)) {
    const solverOutput = solveWaterChemistry(source, target, availableMinerals, waterVolume);

    console.log(solverOutput['scaledAdditions']);

    solved = copyObjectWithDefaults(ions, solverOutput['apparentProfile'], 0.0);
    scaledMineralAdditions = copyObjectWithDefaults(minerals, solverOutput['scaledAdditions'], 0.0);
    unscaledMineralAdditions = copyObjectWithDefaults(minerals, solverOutput['unscaledAdditions'], 0.0);
  }

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Water Profile Summary
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {ions.map((key) => (
                <TableCell key={key} align='right'>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>Source Water Profile</TableCell>
                {ions.map((ion) => (
                  <TableCell key={ion} align='right'>
                    {source[ion]}
                  </TableCell>
                ))}
            </TableRow>

            <TableRow>
              <TableCell component='th' scope='row'>Target Water Profile{target['margin'] ? ' (± Margin of Error)' : null}</TableCell>
                {ions.map((ion) => (
                  <TableCell key={ion} align='right'>
                    {target[ion] + (target['margin'] ? ' (±' + target['margin'][ion] + ')' : '')}
                  </TableCell>
                ))}
            </TableRow>

            <TableRow>
              <TableCell component='th' scope='row'><strong>Optimised Water Profile</strong></TableCell>
                {ions.map((ion) => (
                  <TableCell key={ion} align='right'>
                    <strong>{(solved[ion] || 0.0).toFixed(0)}</strong>
                  </TableCell>
                ))}
            </TableRow>

            {target['margin'] ? (
              <TableRow>
                <TableCell component='th' scope='row'>Suitable?</TableCell>
                  {ions.map((ion) => (
                    <TableCell key={ion} align='right'>
                      {Math.abs((solved[ion] || 0.0).toFixed(0) - target[ion]) <= target['margin'][ion] ? '✓' : '✗' }
                    </TableCell>
                  ))}
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <Typography variant='h6' gutterBottom>
        Addition Summary
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {minerals.map((m) => (
                <TableCell key={m} align='right'>{m}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>per&nbsp;Litre</TableCell>
              {minerals.map((m) => (
                <TableCell key={m} align='right'>
                  {(unscaledMineralAdditions[m] || 0.0).toFixed(3)}g
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell component='th' scope='row'>
                Total&nbsp;(to&nbsp;treat&nbsp;{waterVolume.toFixed(2)}L)
              </TableCell>
              {minerals.map((m) => (
                <TableCell key={m} align='right'>
                  {(scaledMineralAdditions[m] || 0.0).toFixed(2)}g
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </React.Fragment>
  );
};