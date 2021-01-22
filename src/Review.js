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

export default function Review(props) {
  console.log('state', props.state);
  const classes = useStyles();

  const source = props.state.sourceProfile;
  const target = props.state.targetProfile;
  const availableMinerals = props.state.brewingProfile.availableMinerals;
  const waterVolume = parseFloat(props.state.brewingProfile.waterVolume);

  console.log(props.state);

  const minerals = mineralProfiles.map((m) => m.mineral);
  const keys = Object.keys(source);

  let solved = {...target};
  let scaledMineralAdditions = {};
  minerals.map((m) => scaledMineralAdditions[m] = 0.0);
  let unscaledMineralAdditions = {...scaledMineralAdditions};
  if (JSON.stringify(source) !== JSON.stringify(target)) {
    const solverOutput = solveWaterChemistry(source, target, availableMinerals, waterVolume);
    solved = {...solverOutput['apparentProfile']};
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
              {keys.map((key) => (
                <TableCell key={key} align='right'>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>Source Water Profile</TableCell>
                {keys.map((key) => (
                  <TableCell key={key} align='right'>
                    {source[key]}
                  </TableCell>
                ))}
            </TableRow>

            <TableRow>
              <TableCell component='th' scope='row'>Target Water Profile (± Margin of Error)</TableCell>
                {keys.map((key) => (
                  <TableCell key={key} align='right'>
                    {target[key] + ' (±' + target['margin'][key] + ')'}
                  </TableCell>
                ))}
            </TableRow>

            <TableRow>
              <TableCell component='th' scope='row'><strong>Optimised Water Profile</strong></TableCell>
                {keys.map((key) => (
                  <TableCell key={key} align='right'>
                    <strong>{solved[key].toFixed(0)}</strong>
                  </TableCell>
                ))}
            </TableRow>

            <TableRow>
              <TableCell component='th' scope='row'>Suitable?</TableCell>
                {keys.map((key) => (
                  <TableCell key={key} align='right'>
                    {Math.abs(solved[key].toFixed(0) - target[key]) <= target['margin'][key] ? '✓' : '✗' }
                  </TableCell>
                ))}
            </TableRow>
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
              {minerals.map((key) => (
                <TableCell key={key} align='right'>{key}</TableCell>
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