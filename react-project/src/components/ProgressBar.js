import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = ({ activeStep }) => {
    const [showProgressBar, setShowProgressBar] = useState(true);

useEffect(() => {
    if (activeStep === 10) {
      const timer = setTimeout(() => {
        setShowProgressBar(false); // 3초 후에 프로세스 바를 숨깁니다.
      }, 3000);

      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    }
  }, [activeStep]);

  return (
    <>
      {showProgressBar && <LinearProgress />}
    </>
  );
};

export default ProgressBar;
