import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Paper,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

const Carousel = () => {
  const sliderRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedRadioGroup1, setSelectedRadioGroup1] = useState('');
  const [selectedRadioGroup2, setSelectedRadioGroup2] = useState('');
  const [budgetSliderValue, setBudgetSliderValue] = useState(100);
  const [cpuOptions, setCpuOptions] = useState([]);

  const items = [
    {
      name: '컴퓨터 견적을 맞추는 것에 어려움을 겪는분은 다음 버튼을 눌러 몇가지 질문에 답해주세요',
    },
    {
      name: '컴퓨터를 사용하는 목적이 무엇인가요?',
      radioGroup: 'group1',
      options: ['사무용', '일상용', '게임용', '고사양', '일단 넘어갈게요.'],
    },
    {
      name: '예산을 한정해주세요.',
      sliderLabel: '예산 선택',
      sliderValue: budgetSliderValue,
    },
    {
      name: '선호하는 CPU를 골라주세요.',
      radioGroup: 'group2',
      options: cpuOptions,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    beforeChange: (current, next) => setActiveStep(next),
  };

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      sliderRef.current.slickNext();
    } else if (direction === 'prev') {
      sliderRef.current.slickPrev();
    }
  };

  const handleRadioChange = (event, group) => {
    const selectedOption = event.target.value;

    switch (group) {
      case 'group1':
        setSelectedRadioGroup1(selectedOption);
        break;
      case 'group2':
        setSelectedRadioGroup2(selectedOption);
        break;
      // 추가적인 라디오 그룹이 있을 경우에도 처리 가능
      default:
        break;
    }

   switch (selectedOption) {
         case '사무용':
           setBudgetSliderValue(55);
           setCpuOptions(['사무용cpu1', '사무용cpu2', '사무용cpu3']);
           break;
         case '일상용':
           setBudgetSliderValue(105);
            setCpuOptions(['일상용cpu1', '일상용cpu2', '일상용cpu3']);
           break;
        case '게임용':
           setBudgetSliderValue(195);
            setCpuOptions(['게임용cpu1', '게임용cpu2', '게임용cpu3']);
           break;
        case '고사양':
           setBudgetSliderValue(625);
            setCpuOptions(['고사양cpu1', '고사양cpu2', '고사양cpu3']);
           break;
         default:
           setBudgetSliderValue(100);
           // 기본 값에 대한 처리 추가
       }

  };

  // 다음 버튼이 활성화되어야 하는지 여부를 결정하는 함수
  const isNextButtonDisabled = () => {
    if (activeStep === 1 && selectedRadioGroup1 === '') {
      return true;
    } else if (activeStep === 3 && selectedRadioGroup2 === '') {
      return true;
    }
    return false;
  };

  return (
    <div>
      {/* 세로로 표시되는 스테퍼 */}
      <Stepper activeStep={activeStep} orientation="vertical">
        {items.map((item, index) => (
          <Step key={index}>
            <StepLabel>{item.name}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* 이미지 및 설명이 표시되는 슬라이더 */}
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <Paper style={{ padding: 16, textAlign: 'center' }}>
              <Typography variant="h4">{item.name}</Typography>

              {/* 두 번째 슬라이드인지 확인하고 슬라이더를 렌더링합니다. */}
              {index === 2 && (
                <div>
                  <Typography variant="h6">{item.sliderLabel}</Typography>
                  <input
                    type="range"
                    min={selectedRadioGroup1 === '일단 넘어갈게요.' ? 30 : selectedRadioGroup1 === '사무용' ? 30 : selectedRadioGroup1 === '일상용' ? 80 : selectedRadioGroup1 === '게임용' ? 130 : selectedRadioGroup1 === '고사양' ? 250: undefined}
                    max={selectedRadioGroup1 === '일단 넘어갈게요.' ? 1000 : selectedRadioGroup1 === '사무용' ? 80 : selectedRadioGroup1 === '일상용' ? 130 : selectedRadioGroup1 === '게임용' ? 250 : selectedRadioGroup1 === '고사양' ? 1000: undefined}
                    step={5}
                    value={budgetSliderValue}
                    onChange={(e) => setBudgetSliderValue(parseInt(e.target.value))}
                  />
                  <Typography variant="body2">{budgetSliderValue}</Typography>
                </div>
              )}

              {/* 라디오 그룹 */}
              {index === 1 && (
                <RadioGroup
                  name="radioGroup1"
                  value={selectedRadioGroup1}
                  onChange={(e) => handleRadioChange(e, 'group1')}
                >
                  {item.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              )}

              {/* 4번째 슬라이드에서 라디오 그룹 */}
              {index === 3 && (
                <RadioGroup
                  name="radioGroup2"
                  value={selectedRadioGroup2}
                  onChange={(e) => handleRadioChange(e, 'group2')}
                >
                  {item.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              )}
            </Paper>
          </div>
        ))}
      </Slider>

      <div style={{ textAlign: 'right', marginTop: '16px' }}>
        <Button
          onClick={() => handleSlideChange('prev')}
          variant="contained"
          color="primary"
        >
          이전
        </Button>
        <Button
          onClick={() => handleSlideChange('next')}
          variant="contained"
          color="primary"
          style={{ marginLeft: '8px' }}
          disabled={isNextButtonDisabled()}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
