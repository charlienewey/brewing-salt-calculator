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
    const ions = ['calcium', 'magnesium', 'sodium', 'sulfate', 'chloride', 'bicarbonate'];

    return (
      <Grid container justify='center' className={classNames} spacing={1}>
        {ions.map((ion) => (
          <Grid key={ion} item xs={12} sm={6} md={4} lg={2}>
            <TextField
              label={ion.charAt(0).toUpperCase() + ion.slice(1)}
              type='number'
              min={0.0}
              value={this.props.state[ion]}
              onChange={(e) => this.handleIonChange(e, ion)}
              InputProps={{ startAdornment: <InputAdornment position='start'>ppm</InputAdornment> }}
              variant='outlined'
              required
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default IonProfileEntry;