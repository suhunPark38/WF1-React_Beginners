import React from "react";

/*
견적 정보 배열을 넘겨주는 컴포넌트
 */


const EstimateInformArray= (estimate) => {
    let totalPrice = 0;
    let totalPerformance = 0;

    return(
        <>
            <strong>견적 가격:</strong> {totalPrice}
            <p></p>
            <strong>견적 성능:</strong> {totalPerformance}
        </>
    )
}

export default EstimateInformArray;