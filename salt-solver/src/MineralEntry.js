import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


class MineralEntry extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = props.classNames;

    if (props.clickedRow === undefined || props.clickedRow === null) {
      this.state = {
        calcium: 0.0,
        magnesium: 0.0,
        sodium: 0.0,
        sulfate: 0.0,
        chloride: 0.0
      };
    } else {
      this.state = props.clickedRow
    };

    this.handleSingleChange = this.handleSingleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidUpdate (prevProps) {
    if (prevProps.state !== this.props.state) {
      this.setState(this.props.state);
    };
  };

  handleSingleChange (event, state_target) {
    var update = {};
    update[state_target] = event.target.value;
    this.setState(update);
  };

  handleSubmit (event) {
    console.log(this.state);
    event.preventDefault();
  };

  render () {
    let classNames = [this.classNames, 'MineralEntry'].join(' ')
    return (
      <Grid container justify='center' className={classNames} spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            label='Calcium'
            type='number'
            min={0.0}
            value={this.state.calcium}
            onChange={(e) => this.handleSingleChange(e, 'calcium')}
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
            value={this.state.magnesium}
            onChange={(e) => this.handleSingleChange(e, 'magnesium')}
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
            value={this.state.sodium}
            onChange={(e) => this.handleSingleChange(e, 'sodium')}
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
            value={this.state.sulfate}
            onChange={(e) => this.handleSingleChange(e, 'sulfate')}
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
            value={this.state.chloride}
            onChange={(e) => this.handleSingleChange(e, 'chloride')}
            InputProps={{ startAdornment: <InputAdornment position="start">ppm</InputAdornment> }}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
}

export default MineralEntry;