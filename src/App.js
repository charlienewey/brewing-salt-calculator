import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import IonProfileEntry from './IonProfileEntry';
import BrewEntry from './BrewEntry';
import { WaterProfilesTable } from './DataTables';
import Review from './Review';


const roWater = {
  calcium: 1,
  magnesium: 0,
  sodium: 0,
  sulfate: 0,
  chloride: 4,
  bicarbonate: 16
};


function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/charlienewey/'>
        Charles Newey
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1024,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

class SaltSolverApp extends React.Component  {
  steps = ['Source profile input', 'Target profile input', 'Brewing parameter input', 'Review results'];

  defaultState = {
    activeStep: 0,
    sourceProfile: {...roWater},
    targetProfile: {...roWater},
    brewingProfile: {
      waterVolume: 20.0,
      availableMinerals: {
        'Gypsum': true,
        'Calcium Chloride': true,
        'Epsom Salt': true,
        'Magnesium Chloride': false,
        'Canning Salt': true,
        'Baking Soda': true,
        'Chalk': true,
        'Pickling Lime': false
      }
    }
  };

  constructor (props) {
    super(props);
    this.classes = props.classes;

    if (props.state === undefined || props.state === null) {
      this.state = {...this.defaultState};
    } else {
      this.state = props.state;
    };
 
    // water profile state
    this.handleSourceProfileChange = this.handleSourceProfileChange.bind(this);
    this.handleTargetProfileChange = this.handleTargetProfileChange.bind(this);
    this.handleMineralInventoryChange = this.handleMineralInventoryChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.selectPresetTarget = this.selectPresetTarget.bind(this);

    // pagination state controls
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  };

  componentDidUpdate (prevProps) {
    if (prevProps.state !== this.props.state) {
      this.setState(this.props.state);
    };
  };

  handleSourceProfileChange (amount, ion) {
    var sourceProfile = this.state.sourceProfile || this.defaultState.sourceProfile; 
    sourceProfile[ion] = amount;
    this.setState({sourceProfile: sourceProfile});
  };

  handleTargetProfileChange (amount, ion) {
    var targetProfile = this.state.targetProfile || this.defaultState.targetProfile; 
    targetProfile[ion] = amount;
    this.setState({targetProfile: targetProfile});
  };

  handleMineralInventoryChange (availability, mineral) {
    var brewingProfile = this.state.brewingProfile || this.defaultState.brewingProfile;
    brewingProfile.availableMinerals[mineral] = availability;
    this.setState({brewingProfile: brewingProfile});
  };

  handleVolumeChange (amount) {
    var brewingProfile = this.state.brewingProfile || this.defaultState.brewingProfile;
    brewingProfile.waterVolume = amount;
    this.setState({brewingProfile: brewingProfile});
  };

  selectPresetTarget (row) {
    let state = {};
    let keys = Object.keys(row);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'style') {
        state[keys[i]] = row[keys[i]];
      } else {
        // set up target midpoint
        state[keys[i]] = row[keys[i]].midpoint;

        // set up margin for error
        if (! state['margin']) {
          state['margin'] = {};
        }
        state['margin'][keys[i]] = row[keys[i]].margin;
      }
    };
    this.setState({targetProfile: state});
  };

  handleNext () {
    this.setState({activeStep: this.state.activeStep + 1});
  };

  handleBack () {
    this.setState({activeStep: this.state.activeStep - 1});
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Typography variant='h6' gutterBottom>
              Source Water Profile Input
            </Typography>

            <Typography gutterBottom>
              Enter your source water profile here, with each mineral in parts per million. You can usually find these from
              your municipal water provider's reports - or, if you're using bottled water, on the side of the bottle.
            </Typography>

            <Typography gutterBottom>
              The default values below are those of Reverse Osmosis water - but if you're using distilled water, you can
              just fill this list with zeroes.
            </Typography>
            <br />
            <IonProfileEntry
              classNames='sourceProfile'
              state={this.state.sourceProfile}
              onIonChange={this.handleSourceProfileChange}>
            </IonProfileEntry>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Typography variant='h6' gutterBottom>
              Target Water Profile Input
            </Typography>

            <Typography gutterBottom>
              Enter the values for your target water profile here. If you aren't sure which values to go for,
              try using one of the presets listed in the table below. This list covers each major style in the 
              2015 BJCP style guide. For example, if you're brewing an American IPA, you can use "21A - American IPA" 
              as a starting point.
            </Typography>

            <Typography gutterBottom>
              These values come from <a href="https://www.brunwater.com/">Martin Brungard's "Bru'n Water" spreadsheet</a> 
              and <a href="https://www.moneaudebrassage.fr/">Mon Eau de Brassage</a>.
            </Typography>
            <br />
            <div>
              <IonProfileEntry
                classNames='targetProfile'
                state={this.state.targetProfile}
                onIonChange={this.handleTargetProfileChange}>
              </IonProfileEntry>
            </div>
            <br />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'>
                Presets for BJCP Beer Styles
              </AccordionSummary>
              <AccordionDetails>
                <WaterProfilesTable
                  selectRow={this.selectPresetTarget}>
                </WaterProfilesTable>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        );
      case 2:
        return (
          <BrewEntry
            state={this.state.brewingProfile}
            onMineralChange={this.handleMineralInventoryChange}
            onVolumeChange={this.handleVolumeChange}>
          </BrewEntry>
        );
      case 3:
        return <Review state={this.state} />
      default:
        throw new Error('Unknown step');
    }
  };

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={this.classes.layout}>
          <Paper className={this.classes.paper}>
            <Typography component='h1' variant='h4' align='center'>
              Brewing Salt Calculator
            </Typography>

            <Stepper activeStep={this.state.activeStep} className={this.classes.stepper}>
              {this.steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <React.Fragment>
              {this.getStepContent(this.state.activeStep)}
              <div className={this.classes.buttons}>
                {this.state.activeStep !== 0 && (
                  <Button onClick={this.handleBack} className={this.classes.button}>
                    Back
                  </Button>
                )}

                {this.state.activeStep < this.steps.length - 1 ? (
                    <Button variant='contained' color='primary' onClick={this.handleNext} className={this.classes.button}>Next</Button>
                  ) : (
                    <Button variant='contained' color='primary' onClick={window.print} className={this.classes.button}>Print Summary</Button>
                  )
                }
              </div>
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SaltSolverApp);