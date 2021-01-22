import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


class IonProfileEntry extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = props.classNames;
    this.handleIonChange = this.handleIonChange.bind(this);
  };

  handleIonChange (event, ion) {
    if (this.props.onIonChange !== undefined && this.props.onIonChange !== null) {
      this.props.onIonChange(event.target.value, ion);
    } else {
      throw new Error('Missing onIonChange prop');
    }
  };

  render () {
    const classNames = [this.classNames, 'IonEntry'].join(' ')
    return (
      <Grid container justify='center' className={classNames} spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Calcium'
            type='number'
            min={0.0}
            value={this.props.state.calcium}
            onChange={(e) => this.handleIonChange(e, 'calcium')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Magnesium'
            type='number'
            min={0.0}
            value={this.props.state.magnesium}
            onChange={(e) => this.handleIonChange(e, 'magnesium')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Sodium'
            type='number'
            min={0.0}
            value={this.props.state.sodium}
            onChange={(e) => this.handleIonChange(e, 'sodium')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Sulfate'
            type='number'
            min={0.0}
            value={this.props.state.sulfate}
            onChange={(e) => this.handleIonChange(e, 'sulfate')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Chloride'
            type='number'
            min={0.0}
            value={this.props.state.chloride}
            onChange={(e) => this.handleIonChange(e, 'chloride')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Bicarbonate'
            type='number'
            min={0.0}
            value={this.props.state.bicarbonate}
            onChange={(e) => this.handleIonChange(e, 'bicarbonate')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
};

export default IonProfileEntry;