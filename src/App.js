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
import solveWaterChemistry from './Solve';
import { WaterProfilesTable } from './DataTables';
import Review from './Review';


// ====================================

const roWater = {
  calcium: 1,
  magnesium: 0,
  sodium: 0,
  sulfate: 0,
  chloride: 4,
  bicarbonate: 16
};

const target = {
  calcium: 140,
  magnesium: 18,
  sodium: 25,
  sulfate: 300,
  chloride: 55,
  bicarbonate: 110
}

console.log(solveWaterChemistry(roWater, target, 20));

// ====================================


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/charlienewey/">
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
      width: 1280,
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
  steps = ['Source profile input', 'Target profile input', 'Solve', 'Review your changes'];

  constructor (props) {
    super(props);
    this.classes = props.classes;


    if (props.state === undefined || props.state === null) {
      const defaultSourceProfile = {...roWater};
      const defaultTargetProfile = {...roWater};

      this.state = {
        activeStep: 0,
        sourceProfile: defaultSourceProfile,
        targetProfile: defaultTargetProfile 
      };
    } else {
      this.state = props.state;
    };
 
    // water profile state
    this.handleSourceProfileChange = this.handleSourceProfileChange.bind(this);
    this.handleTargetProfileChange = this.handleTargetProfileChange.bind(this);
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

  handleSourceProfileChange (amount, mineral) {
    var sourceProfile = this.state.sourceProfile || {}; 
    sourceProfile[mineral] = amount;
    this.setState({sourceProfile});
  };

  handleTargetProfileChange (amount, mineral) {
    var targetProfile = this.state.targetProfile || {}; 
    targetProfile[mineral] = amount;
    this.setState({targetProfile});
  };

  selectPresetTarget (row) {
    this.setState({targetProfile: row});
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
            <Typography variant="h6" gutterBottom>
              Source Water Profile Input
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
            <Typography variant="h6" gutterBottom>
              Target Water Profile Input
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
                aria-controls="panel2a-content"
                id="panel2a-header">
                Water Profile Presets
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
        console.log(this.state);
        return <h1>HI</h1>;
      case 3:
        return <Review />;
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
            <Typography component="h1" variant="h4" align="center">
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
              {this.state.activeStep === this.steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(this.state.activeStep, this.selectRow)}
                  <div className={this.classes.buttons}>
                    {this.state.activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={this.classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={this.classes.button}
                    >
                      {this.state.activeStep === this.steps.length - 1 ? 'Print Summary' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SaltSolverApp);