import React from 'react';
import RenderRadioGroup from './RenderRadioGroup';
import CompleteTable from './CompleteTable';
import products from "../data/products";

import "../css/helper.css";

import {
    Paper,
    Typography,
} from '@mui/material';

const styles = {

    slider: {
        width: '50%',
        position: 'relative',
    },
};

const StepContent = ({
                         index,
                         item,
                         activeStep,
                         selectedRadioGroups,
                         handleRadioChange,
                         budgetSliderValue,
                         setBudgetSliderValue
                     }) => {
    // 예산 범위를 가져오는 함수
    const getBudgetRange = (type, purpose) => {
        const ranges = {
            'min': {'사무용': 40, '엔터테인먼트': 100, '디자인 및 창작': 140, '고사양 작업': 250},
            'max': {'사무용': 100, '엔터테인먼트': 140, '디자인 및 창작': 250, '고사양 작업': 1200},
        };
        return ranges[type][purpose] || undefined;
    };

    // 예산 슬라이더 렌더링
    const renderBudgetSlider = () => (
        <div className="help1">
            <Typography variant="body2">{budgetSliderValue}</Typography>
            <input
                type="range"
                min={getBudgetRange('min', selectedRadioGroups[0])}
                max={getBudgetRange('max', selectedRadioGroups[0])}
                step={10}
                value={budgetSliderValue}
                onChange={(e) => setBudgetSliderValue(parseInt(e.target.value))}
                style={styles.slider}
            />
            <Typography variant="h6">예산 선택 (단위: 만원)</Typography>
        </div>
    );


    // 선택된 값 렌더링
    const renderSelectedValues = () => {
        const selectedProducts = products.filter(product => selectedRadioGroups.includes(product.name));
        return <CompleteTable data={selectedProducts}/>;
    };

    // 프로그레스 바 렌더링
    const renderProgressBar = () => (
        <div>
            <ProgressBar activeStep={activeStep}/>
            <div>한정한 금액 : {budgetSliderValue}만원</div>
            {selectedRadioGroups.map((value, i) => (
                <div key={i}>{`단계 ${i + 1}: ${value}`}</div>
            ))}
        </div>
    );


    return (

        <Paper>
            <div className="paper">
                <Typography variant="h4">{item.name}</Typography>
                {(index === 1 || (index >= 3 && index <= 10)) && (
                    <RenderRadioGroup
                        index={index}
                        radioGroup={item}
                        groupIndex={(index === 1) ? 1 : index - 1}
                        selectedRadioGroups={selectedRadioGroups}
                        handleRadioChange={handleRadioChange}
                        products={products}
                    />
                )}
                {index === 2 && renderBudgetSlider()}
                {index === 11 && renderProgressBar()}
                {index === 12 && renderSelectedValues()}
            </div>
        </Paper>


    );
};

export default StepContent;
