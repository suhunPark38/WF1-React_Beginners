import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "../data/products";
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
  const [selectedRadioGroup3, setSelectedRadioGroup3] = useState('');
  const [selectedRadioGroup4, setSelectedRadioGroup4] = useState('');
  const [selectedRadioGroup5, setSelectedRadioGroup5] = useState('');
  const [selectedRadioGroup6, setSelectedRadioGroup6] = useState('');
  const [selectedRadioGroup7, setSelectedRadioGroup7] = useState('');
  const [selectedRadioGroup8, setSelectedRadioGroup8] = useState('');
  const [budgetSliderValue, setBudgetSliderValue] = useState(100);
  const [cpuOptions, setCpuOptions] = useState([]);
  const [motherboardOptions, setMotherboardOptions] = useState([]);
  const [ramOptions, setRamOptions] = useState([]);
  const [ssdOptions, setSSDOptions] = useState([]);
  const [powerOptions, setPowerOptions] = useState([]);
  const [caseOptions, setCaseOptions] = useState([]);
  const [coolerOptions, setCoolerOptions] = useState([]);

  const items = [
    { name: '컴퓨터 견적을 위해 도와드립니다.' },
    {
      name: '컴퓨터를 사용하는 목적이 무엇인가요?',
      radioGroup: 'group1',
      options: ['사무용', '일상용', '게임용', '고사양', '일단 넘어갈게요.'],
    },
    { name: '예산을 한정해주세요.', sliderLabel: '예산 선택', sliderValue: budgetSliderValue },
    { name: '선호하는 CPU를 골라주세요.', radioGroup: 'group2', options: cpuOptions },
    { name: '선호하는 메인보드를 골라주세요.', radioGroup: 'group3', options: motherboardOptions },
    { name: '선호하는 램을 골라주세요.', radioGroup: 'group4', options: ramOptions },
    { name: '선호하는 SSD를 골라주세요.', radioGroup: 'group5', options: ssdOptions },
    { name: '선호하는 파워를 골라주세요.', radioGroup: 'group6', options: powerOptions },
    { name: '선호하는 케이스를 골라주세요.', radioGroup: 'group7', options: caseOptions },
    { name: '선호하는 쿨러를 골라주세요.', radioGroup: 'group8', options: coolerOptions },
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
      case 'group3':
        setSelectedRadioGroup3(selectedOption);
        break;
      case 'group4':
        setSelectedRadioGroup4(selectedOption);
        break;
      case 'group5':
        setSelectedRadioGroup5(selectedOption);
        break;
      case 'group6':
        setSelectedRadioGroup6(selectedOption);
        break;
      case 'group7':
        setSelectedRadioGroup7(selectedOption);
        break;
      case 'group8':
        setSelectedRadioGroup8(selectedOption);
        break;
      default:
        break;
    }

    switch (selectedOption) {
      case '사무용':
        const types = ['CPU', '메인보드', '램', 'SSD', '파워', '케이스', '쿨러'];

        const setOptionsByType = (setType, stateSetter) => {
          const options = types.reduce((acc, type) => {
            const filteredProducts = products
              .filter((product) => product.type === type)
              .map((product) => product.name);
            acc[type] = filteredProducts;
            return acc;
          }, {});

          stateSetter(options[setType]);
        };

        setBudgetSliderValue(55);
        setOptionsByType('CPU', setCpuOptions);
        setOptionsByType('메인보드', setMotherboardOptions);
        setOptionsByType('램', setRamOptions);
        setOptionsByType('SSD', setSSDOptions);
        setOptionsByType('파워', setPowerOptions);
        setOptionsByType('케이스', setCaseOptions);
        setOptionsByType('쿨러', setCoolerOptions);

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
    }
  };

  // 다음 버튼이 활성화되어야 하는지 여부를 결정하는 함수
  const isNextButtonDisabled = () => {
    if (activeStep === 1 && selectedRadioGroup1 === '') {
      return true;
    } else if (activeStep === 3 && selectedRadioGroup2 === '') {
      return true;
    } else if (activeStep === 4 && selectedRadioGroup3 === '') {
      return true;
    } else if (activeStep === 5 && selectedRadioGroup4 === '') {
      return true;
    } else if (activeStep === 6 && selectedRadioGroup5 === '') {
      return true;
    } else if (activeStep === 7 && selectedRadioGroup6 === '') {
      return true;
    } else if (activeStep === 8 && selectedRadioGroup7 === '') {
      return true;
    } else if (activeStep === 9 && selectedRadioGroup8 === '') {
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
                    min={
                      selectedRadioGroup1 === '일단 넘어갈게요.'
                        ? 30
                        : selectedRadioGroup1 === '사무용'
                        ? 30
                        : selectedRadioGroup1 === '일상용'
                        ? 80
                        : selectedRadioGroup1 === '게임용'
                        ? 130
                        : selectedRadioGroup1 === '고사양'
                        ? 250
                        : undefined
                    }
                    max={
                      selectedRadioGroup1 === '일단 넘어갈게요.'
                        ? 1000
                        : selectedRadioGroup1 === '사무용'
                        ? 80
                        : selectedRadioGroup1 === '일상용'
                        ? 130
                        : selectedRadioGroup1 === '게임용'
                        ? 250
                        : selectedRadioGroup1 === '고사양'
                        ? 1000
                        : undefined
                    }
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

              {/* 5번째 슬라이드에서 라디오 그룹 */}
              {index === 4 && (
                <RadioGroup
                  name="radioGroup3"
                  value={selectedRadioGroup3}
                  onChange={(e) => handleRadioChange(e, 'group3')}
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

              {/* 6번째 슬라이드에서 라디오 그룹 */}
              {index === 5 && (
                <RadioGroup
                  name="radioGroup4"
                  value={selectedRadioGroup4}
                  onChange={(e) => handleRadioChange(e, 'group4')}
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

              {/* 7번째 슬라이드에서 라디오 그룹 */}
              {index === 6 && (
                <RadioGroup
                  name="radioGroup5"
                  value={selectedRadioGroup5}
                  onChange={(e) => handleRadioChange(e, 'group5')}
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

              {index === 7 && (
                <RadioGroup
                  name="radioGroup6"
                  value={selectedRadioGroup6}
                  onChange={(e) => handleRadioChange(e, 'group6')}
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

              {index === 8 && (
                <RadioGroup
                  name="radioGroup7"
                  value={selectedRadioGroup7}
                  onChange={(e) => handleRadioChange(e, 'group7')}
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

              {index === 9 && (
                <RadioGroup
                  name="radioGroup8"
                  value={selectedRadioGroup8}
                  onChange={(e) => handleRadioChange(e, 'group8')}
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
