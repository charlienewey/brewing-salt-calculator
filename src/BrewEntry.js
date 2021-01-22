import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import mineralProfiles from './data/mineral_profiles.json';


class BrewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = props.classNames;
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleMineralChange = this.handleMineralChange.bind(this);
  };

  handleMineralChange (event, value) {
    if (this.props.onMineralChange !== undefined && this.props.onMineralChange !== null) {
      this.props.onMineralChange(value, event.target.name);
    } else {
      throw new Error('Missing onMineralChange prop');
    }
  };

  handleVolumeChange (event) {
    if (this.props.onVolumeChange !== undefined && this.props.onVolumeChange !== null) {
      this.props.onVolumeChange(event.target.value);
    } else {
      throw new Error('Missing onVolumeChange prop');
    }
  };

  render () {
    const classNames = [this.classNames, 'BrewSetup'].join(' ')
    return (
      <div>
        <Grid container justify='center' className={classNames} spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography variant='h6' gutterBottom>Mineral Inventory</Typography>

            <FormLabel component='legend'>Which brewing salts do you have available?</FormLabel>
            <FormGroup>
              {mineralProfiles.map((profile) => {
                const mineralKey = profile.mineral;
                return (<FormControlLabel key={profile.mineral} control={
                  <Checkbox
                    name={mineralKey}
                    onChange={(e, value) => this.handleMineralChange(e, value)}
                    checked={this.props.state.availableMinerals[mineralKey]} />
                } label={profile.mineral} />
              )})}
            </FormGroup>
          </Grid>
        </Grid>

        <br />
        <br />
        <Grid container justify='center' className={classNames} spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography variant='h6' gutterBottom>Water Volume</Typography>
            <TextField
              label='Total Brewing Water Volume'
              type='number'
              min={0.0}
              value={this.props.state['waterVolume']}
              onChange={(e) => this.handleVolumeChange(e)}
              InputProps={{ startAdornment: <InputAdornment position='start'>litres</InputAdornment> }}
              variant='outlined'
              required
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default BrewEntry;