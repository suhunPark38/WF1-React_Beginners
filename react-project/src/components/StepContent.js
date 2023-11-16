import React from 'react';
import RenderRadioGroup from './RenderRadioGroup';
import ProgressBar from './ProgressBar';
import {
  Paper,
  Typography,
} from '@mui/material';

const style = {
  paper: {
    padding: 16,
    textAlign: 'center',
  },
};

const StepContent = ({ index, item, activeStep, selectedRadioGroups, handleRadioChange, budgetSliderValue, setBudgetSliderValue }) => {
  const renderBudgetSlider = () => (
    <div>
      <Typography variant="h6">예산 선택</Typography>
      <input
        type="range"
        min={getBudgetRange('min', selectedRadioGroups[0])}
        max={getBudgetRange('max', selectedRadioGroups[0])}
        step={5}
        value={budgetSliderValue}
        onChange={(e) => setBudgetSliderValue(parseInt(e.target.value))}
      />
      <Typography variant="body2">{budgetSliderValue}</Typography>
    </div>
  );

  const getBudgetRange = (type, purpose) => {
    const ranges = {
      'min': {
        '일단 넘어갈게요.': 30,
        '사무용': 30,
        '일상용': 80,
        '게임용': 130,
        '고사양': 250,
      },
      'max': {
        '일단 넘어갈게요.': 1000,
        '사무용': 80,
        '일상용': 130,
        '게임용': 250,
        '고사양': 1000,
      },
    };

    return ranges[type][purpose] || undefined;
  };

  return (
    <Paper style={style.paper}>
      <Typography variant="h4">{item.name}</Typography>
      {index === 2 && renderBudgetSlider()}
      {index === 1 && <RenderRadioGroup index={index} radioGroup={item} groupIndex={1} selectedRadioGroups={selectedRadioGroups} handleRadioChange={handleRadioChange} />}
      {(index >= 3 && index <= 9) && <RenderRadioGroup index={index} radioGroup={item} groupIndex={index - 1} selectedRadioGroups={selectedRadioGroups} handleRadioChange={handleRadioChange} />}
      {index === 10 && <ProgressBar activeStep={activeStep} />}
    </Paper>
  );
};

export default StepContent;
