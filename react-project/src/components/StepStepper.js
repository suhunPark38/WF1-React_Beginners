import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

import "../css/Stepper.css";

const StepStepper = ({ activeStep, items }) => {
  return (
  <div className="stepper">
    <Stepper activeStep={activeStep} orientation="vertical">
      {items.map((item, index) => (
        <Step key={index}>
          <StepLabel>{item.name}</StepLabel>
          </Step>
      ))}
      </Stepper>
    </div>
  );
};

export default StepStepper;
