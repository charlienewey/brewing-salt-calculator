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

function updateSolutionProfile(ions, oldProfile, updateProfile) {
  let newProfile = {};
  for (let i = 0; i < ions.length; i++) {
    let ion = ions[i];
    if (updateProfile && updateProfile[ion]) {
      newProfile[ion] = updateProfile[ion];
    } else {
      newProfile[ion] = 0.0;
    }
  };
  return newProfile;
}

export default function Review(props) {
  const classes = useStyles();

  const source = {...props.state.sourceProfile};
  const target = {...props.state.targetProfile};

  const availableMinerals = props.state.brewingProfile.availableMinerals;
  const waterVolume = parseFloat(props.state.brewingProfile.waterVolume);

  const minerals = mineralProfiles.map((m) => m.mineral);
  const ions = Object.keys(source);

  // create blank solution profile
  let solved = {};
  for (let i = 0; i < minerals.length; i++) {
    let mineral = minerals[i];
    solved[mineral] = 0.0
  };

  let scaledMineralAdditions = {};
  minerals.map((m) => scaledMineralAdditions[m] = 0.0);
  let unscaledMineralAdditions = {...scaledMineralAdditions};

  if (JSON.stringify(source) !== JSON.stringify(target)) {
    const solverOutput = solveWaterChemistry(source, target, availableMinerals, waterVolume);
    solved = updateSolutionProfile(ions, solved, solverOutput['apparentProfile']);
    scaledMineralAdditions = {...solverOutput['scaledAdditions']};
    unscaledMineralAdditions = {...solverOutput['unscaledAdditions']};
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