import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "../data/products";
import StepContent from './StepContent';
import StepStepper from './StepStepper';
import {Button} from '@mui/material';

import "../css/carousel.css";


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

        {name: '컴퓨터 견적을 위해 도와드립니다.'},

        {
            name: '컴퓨터를 사용하는 목적이 무엇인가요?',
            radioGroup: 'group1',
            options: ['사무용', '엔터테인먼트', '디자인 및 창작', '고사양 작업'],
        },
        {name: '어느 정도의 예산을 생각하고 있나요?', sliderValue: budgetSliderValue},
        {name: '다음 CPU중 하나를 골라주세요.', radioGroup: 'group2', options: options.Cpu},
        {name: '다음 GPU중 하나를 골라주세요.', radioGroup: 'group3', options: options.Gpu},
        {name: '다음 보드중 하나를 골라주세요.', radioGroup: 'group4', options: options.Motherboard},
        {name: '다음 램중 하나를 골라주세요.', radioGroup: 'group5', options: options.Ram},
        {name: '다음 SSD중 하나를 골라주세요.', radioGroup: 'group6', options: options.SSD},
        {name: '다음 파워중 하나를 골라주세요.', radioGroup: 'group7', options: options.Power},
        {name: '다음 케이스중 하나를 골라주세요.', radioGroup: 'group8', options: options.Case},
        {name: '다음 쿨러중 하나를 골라주세요.', radioGroup: 'group9', options: options.Cooler},

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
        beforeChange: (current, next) => {
            // 슬라이더 이동 전에 처리할 로직
            setActiveStep(next);

            // 슬라이더 이동 전에 변경된 값을 처리
            setOptions((prevOptions) => ({
                ...prevOptions,
                Cpu: applyOptionsByType('CPU', budgetSliderValue),
                Gpu: applyOptionsByType('gpu', budgetSliderValue),
                Motherboard: applyOptionsByType('메인보드', budgetSliderValue),
                Ram: applyOptionsByType('램', budgetSliderValue),
                SSD: applyOptionsByType('SSD', budgetSliderValue),
                Power: applyOptionsByType('파워', budgetSliderValue),
                Case: applyOptionsByType('케이스', budgetSliderValue),
                Cooler: applyOptionsByType('쿨러', budgetSliderValue),
            }));
        },
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
        const groupIndex = parseInt(group.replace('group', ''), 11) - 1;

        if (group === 'group1') {
            setSelectedRadioGroups(resetSelectedOptions);
            handleGroup1Change(selectedOption); //용도에 따라 슬라이더 중간 값과 최대 가격(이걸 퍼포먼스로 수정하여)을 부여
        }

        setSelectedRadioGroups((prevGroups) => {
            const groups = [...prevGroups];
            groups[groupIndex] = selectedOption;
            return groups;
        });

    };
    const handleGroup1Change = (selectedOption) => {
        switch (selectedOption) {
            case '사무용':
                setBudgetSliderValue(40);
                break;
            case '엔터테인먼트':
                setBudgetSliderValue(100);
                break;
            case '디자인 및 창작':
                setBudgetSliderValue(140);
                break;
            case '고사양 작업':
                setBudgetSliderValue(250);
                break;
            default:

        }


    };
    const applyOptionsByType = (setType, budgetSliderValue) => {
        switch (setType) {
            case 'CPU':
                if (selectedRadioGroups[0] !== '사무용') {
                    return products
                        .filter((product) => product.type === setType && product.price <= budgetSliderValue * 2000 && product.price > budgetSliderValue *500)
                        .map((product) => product.name);
                }
                return products
                    .filter((product) => product.type === setType && product.price <= budgetSliderValue * 4000 && product.price <= 200000)
                    .map((product) => product.name);
            case 'gpu':
                if (selectedRadioGroups[0] !== '사무용') {
                    return products
                        .filter((product) => product.type === setType && product.price <= budgetSliderValue * 3300 && product.price > budgetSliderValue *1000)
                        .map((product) => product.name);
                }
                return products
                    .filter((product) => product.type === setType && product.name === '내장 그래픽')
                    .map((product) => product.name);
            case '메인보드':
                const selectedCpu = selectedRadioGroups[1];
                const selectedCpuDetail = selectedCpu ? products.find((product) => product.name === selectedCpu)?.detail : '';

                return products
                    .filter((product) =>
                        product.type === setType &&
                        product.price <= budgetSliderValue * 2000 && // 가격 필터 추가
                        product.detail && // 메인보드에 대한 detail이 있는 경우에만 필터링
                        (
                            (!selectedCpuDetail || (selectedCpuDetail.includes('인텔') && product.detail.includes('인텔')) ||
                                (selectedCpuDetail.includes('AMD') && product.detail.includes('AMD')))
                        )
                    )
                    .map((product) => product.name);

            case '램':
                const selectedMotherboard = selectedRadioGroups[3];
                const selectedMotherboardDetail = selectedMotherboard ? products.find((product) => product.name === selectedMotherboard)?.detail : '';

                return products
                    .filter((product) =>
                        product.type === setType &&
                        product.price >= budgetSliderValue * 100 &&
                        product.price <= budgetSliderValue * 2000 &&
                        (
                            !selectedMotherboardDetail ||
                            (
                                (selectedMotherboardDetail.includes('DDR4') && product.name.includes('DDR4')) ||
                                (selectedMotherboardDetail.includes('DDR5') && product.name.includes('DDR5'))
                            )
                        )
                    )
                    .map((product) => product.name);

            case 'SSD':
                return products
                    .filter((product) => product.type === setType && product.price <= budgetSliderValue * 1200)
                    .map((product) => product.name);
            case '파워':
                const selectedGpu = selectedRadioGroups[2];
                const powerProducts = products.filter((product) => product.type === setType);

                const is500 = (selectedGpu.includes('3050') || selectedGpu.includes('1650'));
                const is600 = (selectedGpu.includes('7600') || selectedGpu.includes('6700') || selectedGpu.includes('3060')
                    || selectedGpu.includes('1660') || selectedGpu.includes('6600') || selectedGpu.includes('4060')) && !selectedGpu.includes('Ti');
                const is700 = (selectedGpu.includes('3070') || selectedGpu.includes('4060')) && (selectedGpu.includes('Ti'));
                const is1600 = selectedGpu.includes('4090') || selectedGpu.includes('4080');
                const is400or500 = !selectedGpu || selectedGpu.length === 0;

                return powerProducts
                    .filter((product) => {
                        if (is500 && product.name.includes('500')) {
                            return true;
                        }
                        if (is600 && product.name.includes('600') && product.price < 800000) {
                            return true;
                        }
                        if (is700 && (product.name.includes('700'))) {
                            return true;
                        }
                        if (is1600 && (product.name.includes('1600'))) {
                            return true;
                        }
                        if (is400or500 && (product.name.includes('400') || product.name.includes('500'))) {
                            return true;
                        }
                        // 추가: GPU가 선택되었지만 내장 그래픽인 경우
                        if (selectedGpu && selectedGpu.includes('내장 그래픽') && product.name.includes('400')) {
                            return true;
                        }
                        return false;
                    })
                    .map((product) => product.name);
            case '케이스':

                return products
                    .filter((product) => product.type === setType && product.price <= budgetSliderValue * 800 && product.price >= budgetSliderValue * 100)
                    .map((product) => product.name);

            case '쿨러':
                if (selectedRadioGroups[0] !== '사무용') {
                    return products
                        .filter((product) => product.type === setType && product.price <= budgetSliderValue * 500 && product.price >= budgetSliderValue * 100)
                        .map((product) => product.name);
                }
                return products
                    .filter((product) => product.type === setType && product.name === '기본 쿨러')
                    .map((product) => product.name);
            default:
                return [];
        }
    };


    // 다음 버튼이 활성화 되어야 하는지 여부를 결정하는 함수
    const isNextButtonDisabled = () => {
        if (activeStep === 12) {
            return true;
        }
        if (activeStep === 1 && selectedRadioGroups[activeStep - 1] === '') {
            return true;
        }
        if ((activeStep >= 3 && activeStep <= 11) && selectedRadioGroups[activeStep - 2] === '') {
            return true;
        }
        return false;
    };


    return (
        <div>
            {/* 세로로 표시되는 스테퍼 */}
            <StepStepper activeStep={activeStep} items={items}/>


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


            <div className="Button">
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
                    style={{marginLeft: '8px'}}
                    disabled={isNextButtonDisabled()}
                >
                    다음
                </Button>
            </div>
        </div>
    );

};

export default Carousel;
