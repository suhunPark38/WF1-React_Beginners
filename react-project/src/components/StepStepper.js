import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const style = {
  stepper: {
    padding: 16,
    textAlign: 'center',
    height: 10,// 화면 높이의 20%
    float: 'right'
  },
};

const StepStepper = ({ activeStep, items }) => {
  return (
    <Stepper style={style.stepper} activeStep={activeStep} orientation="vertical">
      {items.map((item, index) => (
        <Step key={index}>
          <StepLabel>{item.name}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepStepper;
