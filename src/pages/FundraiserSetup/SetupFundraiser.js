import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import FundraiserInfo from './FundraiserInfo';
import NgoInfo from './NgoInfo';
import OtherInfo from './OtherInfo';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps(fundFor) {
    if(fundFor === "NGO") return ['Basic Info of campaigner', 'Fundraiser Info', 'NGO Details','Other details'];
    else return ['Basic Info of campaigner', 'Fundraiser Info', 'Other details'];
}



const SetupFundraiser = () =>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [fundFor, setFundFor] = useState("IG");

  const steps = getSteps(fundFor);
  const fundRaisingFor = (fundFor) =>{
    setFundFor(fundFor);
  }
  const handleNext = () => {
      console.log("=====")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  function getStepContent(stepIndex) {
      if(fundFor === "NGO"){
        switch (stepIndex) {
            case 0:
              return <BasicInfo activeStep = {activeStep} handleBack = {handleBack} handleNext = {handleNext}></BasicInfo>;
            case 1:
              return <FundraiserInfo handleBack = {handleBack} handleNext = {handleNext}></FundraiserInfo>;
            case 2:
              return <NgoInfo handleBack = {handleBack} handleNext = {handleNext}></NgoInfo>;
            case 3:
             return <OtherInfo handleBack = {handleBack} handleNext = {handleNext}></OtherInfo>;
            default:
              return 'Unknown stepIndex';
          }
      }
      else{
        switch (stepIndex) {
            case 0:
              return <><BasicInfo activeStep = {activeStep} handleBack = {handleBack} handleNext = {handleNext}/></>;
            case 1:
              return <FundraiserInfo handleBack = {handleBack} handleNext = {handleNext}></FundraiserInfo>;
            case 2:
             return <OtherInfo handleBack = {handleBack} handleNext = {handleNext}></OtherInfo>;
            default:
              return 'Unknown stepIndex';
          }
      }
   
  }
  return (
    <div className="row">
    
        <div className="dprofile_header dpeheaderbdy sfbdy">
            <div className="container">
                <div className="row dpeheader">
                    Fundraising for
                    <div className="sfrmbdy">
                        <Link className={fundFor==="IG"?'active':''}  onClick={()=>{fundRaisingFor("IG")}}>Individual or Groups</Link>
                        <Link className={fundFor==="NGO"?'active':''}   onClick={()=>{fundRaisingFor("NGO")}}>NGO</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                   {getStepContent(activeStep)}
                    {/* <div>
                        <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                        >
                        Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div> */}
                    </div>
                )}
            </div>
        </div>
    </div>
   
  );
}

export default SetupFundraiser;