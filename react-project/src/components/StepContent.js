import React from 'react';
import RenderRadioGroup from './RenderRadioGroup';
import ProgressBar from './ProgressBar';
import {
  Paper,
  Typography,
} from '@mui/material';

const style = {
  paper: {
    padding: 30,
    textAlign: 'center',
    height: '50vh',// 화면 높이의 50%

    overflowY: 'scroll',
  },
  slider:{
    width: '50%', // Adjust the width as needed
    position: 'relative',
  },
};

const StepContent = ({ index, item, activeStep, selectedRadioGroups, handleRadioChange, budgetSliderValue, setBudgetSliderValue }) => {
  const renderBudgetSlider = () => (
    <div>
        <Typography variant="body2">{budgetSliderValue}</Typography>
      <input
        type="range"
        min={getBudgetRange('min', selectedRadioGroups[0])}
        max={getBudgetRange('max', selectedRadioGroups[0])}
        step={5}
        value={budgetSliderValue}
        onChange={(e) => setBudgetSliderValue(parseInt(e.target.value))}
        style={style.slider}
      />
      <Typography variant="h6">예산 선택 (단위: 만원)</Typography>

    </div>
  );

  const getBudgetRange = (type, purpose) => {
    const ranges = {
      'min': {
        '사무용': 30,
        '일상용': 80,
        '게임용': 130,
        '고사양': 250,
      },
      'max': {
        '사무용': 80,
        '일상용': 130,
        '게임용': 250,
        '고사양': 1000,
      },
    };

    return ranges[type][purpose] || undefined;
  };

  const renderSelectedValues = () => {
      return (

        <div>
           <div>한정한 금액 : {budgetSliderValue}만원</div>
          {selectedRadioGroups.map((value, i) => (
            <div key={i}>{`단계 ${i + 1}: ${value}`}</div>
          ))}

        </div>
      );
  };

  return (
    <Paper style={style.paper}>
      <Typography variant="h4">{item.name}</Typography>
      {index === 1 && <RenderRadioGroup index={index} radioGroup={item} groupIndex={1} selectedRadioGroups={selectedRadioGroups} handleRadioChange={handleRadioChange} />}
      {index === 2 && renderBudgetSlider()}
      {(index >= 3 && index <= 9) && <RenderRadioGroup index={index} radioGroup={item} groupIndex={index - 1} selectedRadioGroups={selectedRadioGroups} handleRadioChange={handleRadioChange} />}
      {index === 10 && <ProgressBar activeStep={activeStep} />}
      {index === 11 &&renderSelectedValues()}
    </Paper>
  );
};

export default StepContent;
