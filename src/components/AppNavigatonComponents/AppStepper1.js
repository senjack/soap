import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginLeft: '0'
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Personal Details', 
    'Contact Details', 
    'Education Background',
    '',
    '',
    '',
    '',
    ''
  ];
}

export default function AppStepper1(props) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div className={classes.root} >
      <Stepper style={{backgroundColor:'#f9f9f9',padding:'0px',marginLeft:'-30px',marginRight:'-30px'}} activeStep={props.activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
