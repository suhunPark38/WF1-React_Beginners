import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = ({ activeStep }) => {
    const [showProgressBar, setShowProgressBar] = useState(true);
    const [successMessage, setSuccessMessage] = useState(false);

useEffect(() => {
   // 페이지 이동 후 다시 마운트될 때 실행
    setShowProgressBar(true); // 프로세스 바 보이기
    setSuccessMessage(false); // 성공 메시지 초기화

    if (activeStep === 10) {
      const timer = setTimeout(() => {
         setShowProgressBar(false); // 프로세스 바 숨기기
         setSuccessMessage(true); // 성공 메시지 보이기
      }, 3000);

      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    }
  }, [activeStep]);

 // 외부에서 상태를 가져갈 수 있는 함수
  const getShowProgressBar = () => showProgressBar;


  return (
    <>
      {showProgressBar && <LinearProgress />}
        {successMessage && <div>성공</div>}
    </>
  );
};

export default ProgressBar;
