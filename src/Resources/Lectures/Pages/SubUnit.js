import React, {useState} from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllCourses from "../Components/AllCourses";
import SectionTitle from "../../../Shared/SectionTitle";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SubUnitCard from "../Components/SubUnitCard";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from axios;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
}));
function getSteps() {
    return ['Unit 01', 'Unit 02', 'Unit 03'];
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <video height="480" controls className="w-100">
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>;
      case 1:
        return <video height="480" controls className="w-100">
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
        </video>
      case 2:
        return <video height="480" controls className="w-100">
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
        </video>
      default:
        return 'Unknown step';
    }
  }
function SubUnit() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [datas, setDatas] =  useState([]);
    let subject = window.location.href.split("/").pop();
    axios.get(`/api/subunits/${subject}`).then((response)=>{
        setDatas(response.data);
    })
    const classes = useStyles();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <PageHeader title={subject} />
      <div
        style={{
          padding: "50px",
        }}
      >
        <SectionTitle title={subject} icon="fas fa-book" />

       
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All videos are completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
              
      </div>
    </div>
  );
}

export default SubUnit;
