import React, { useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "../data/products";
import StepContent from './StepContent';
import StepStepper from './StepStepper';
import {Button} from '@mui/material';



const Carousel = () => {


  const resetSelectedOptions = Array(9).fill('');
  const sliderRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedRadioGroups, setSelectedRadioGroups] = useState(resetSelectedOptions);
  const [budgetSliderValue, setBudgetSliderValue] = useState(100);
  const [options, setOptions] = useState({
    Cpu: [],
    Gpu: [],
    Motherboard: [],
    Ram: [],
    SSD: [],
    Power: [],
    Case: [],
    Cooler: [],
  });
  const items = [

    { name: '컴퓨터 견적을 위해 도와드립니다.' },

    {
      name: '컴퓨터를 사용하는 목적이 무엇인가요?',
      radioGroup: 'group1',
      options: ['사무용', '일상용', '게임용', '고사양'],
    },
    { name: '예산을 한정해주세요.', sliderValue: budgetSliderValue },
    { name: '선호하는 CPU를 골라주세요.', radioGroup: 'group2', options: options.Cpu },
    { name: '선호하는 GPU를 골라주세요.', radioGroup: 'group3', options: options.Gpu },
    { name: '선호하는 메인보드를 골라주세요.', radioGroup: 'group4', options:  options.Motherboard },
    { name: '선호하는 램을 골라주세요.', radioGroup: 'group5', options: options.Ram },
    { name: '선호하는 SSD를 골라주세요.', radioGroup: 'group6', options: options.SSD },
    { name: '선호하는 파워를 골라주세요.', radioGroup: 'group7', options: options.Power },
    { name: '선호하는 케이스를 골라주세요.', radioGroup: 'group8', options: options.Case },
    { name: '선호하는 쿨러를 골라주세요.', radioGroup: 'group9', options: options.Cooler },

    {name: '호환성 검사 단계입니다.'},
    {name: '완성'},
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
    }
    else if (direction === 'prev') {
      sliderRef.current.slickPrev();
    }
  };

  const handleRadioChange = (event, group) => {
    const selectedOption = event.target.value;
    const groupIndex = parseInt(group.replace('group', ''), 11) - 1;

  if (group === 'group1') {
    //이게 필요한 이유 다시 앞으로 가서 사용 목적을 변경했을 때
    //이전 선택한 라디오 버튼들을 지워버리기 위해서
    //지우지 않으면 보이지 않는 라디오 버튼들에 의해서 선택하지 않고 다음이 진행될 수 있다.
     setSelectedRadioGroups(resetSelectedOptions);
     handleGroup1Change(selectedOption); //용도에 따라 슬라이더 중간 값과 최대 가격(이걸 퍼포먼스로 수정하여)을 부여
  }

     setSelectedRadioGroups((prevGroups) => {
        const groups = [...prevGroups];
        groups[groupIndex] = selectedOption;
        return groups;
      });
     handleOptionChange(selectedOption);
  };
  const handleGroup1Change = (selectedOption) => {
    let maxPrice;
  switch (selectedOption) {
    case '사무용':
      setBudgetSliderValue(55);
       maxPrice = 55000;
      break;
    case '일상용':
      setBudgetSliderValue(105);
         maxPrice = 105000;
      break;
    case '게임용':
      setBudgetSliderValue(190);
       maxPrice = 195000;
      break;
    case '고사양':
      setBudgetSliderValue(625);
          maxPrice = 10000000;
      break;
    default:
      maxPrice = 0;
  }

  setOptions((prevOptions) => ({
          ...prevOptions,
          Cpu: applyOptionsByType('CPU', maxPrice),
          Gpu: applyOptionsByType('gpu', maxPrice),
          Motherboard: applyOptionsByType('메인보드', maxPrice),
          Ram: applyOptionsByType('램', maxPrice),
          SSD: applyOptionsByType('SSD', maxPrice),
          Power: applyOptionsByType('파워', maxPrice),
          Case: applyOptionsByType('케이스', maxPrice),
          Cooler: applyOptionsByType('쿨러', maxPrice),
        }));
};
  const applyOptionsByType = (setType, maxPrice) => {
  return products
    .filter((product) => product.type === setType && product.price <= maxPrice)
    .map((product) => product.name);
};

  const handleOptionChange = (selectedOption) => {
            // 추가적인 로직을 수행할 수 있습니다.
            // 선택된 옵션에 따라 다른 동작을 수행하거나 상태를 업데이트할 수 있습니다.
          };

  // 다음 버튼이 활성화되어야 하는지 여부를 결정하는 함수
  const isNextButtonDisabled = () => {
   if (activeStep===11) {
        return true;
      }
  if (activeStep === 1 && selectedRadioGroups[activeStep - 1] === '') {
    return true;
  }
  if ((activeStep >= 3 && activeStep <= 10) && selectedRadioGroups[activeStep - 2] === '') {
    return true;
  }
  return false;
};


  return (
    <div>
      {/* 세로로 표시되는 스테퍼 */}
     <StepStepper activeStep={activeStep} items={items} />

      {/* 이미지 및 설명이 표시되는 슬라이더 */}
      <Slider ref={sliderRef} {...settings}>
  {items.map((item, index) => (
          <div key={index}>
            <StepContent
              index={index}
              item={item}
              activeStep={activeStep}
              selectedRadioGroups={selectedRadioGroups}
              handleRadioChange={handleRadioChange}
              budgetSliderValue={budgetSliderValue}
              setBudgetSliderValue={setBudgetSliderValue}
            />
          </div>
        ))}
      </Slider>

      <div style={{ textAlign: 'right', marginTop: '30px',marginRight: '30vh' }}>
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
