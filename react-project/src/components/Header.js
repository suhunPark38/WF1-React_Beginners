import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

import '../css/Header.css';



const Header = () => {
  return (
    <AppBar position="static" className="header"> {/* header 클래스 적용 */}
      <Tabs
        classes={{ indicator: 'tabIndicator' }} // tabIndicator 클래스 적용
      >
        <Tab
          label="Home"
          component={Link}
          to="/"
          className="tabLabel" // tabLabel 클래스 적용
        />
        <Tab
          label="About"
          component={Link}
          to="/About"
          className="tabLabel" // tabLabel 클래스 적용
        />
        <Tab
          label="부품 페이지"
          component={Link}
          to="/Introduce"
          className="tabLabel" // tabLabel 클래스 적용
        />
        <Tab
          label="견적 페이지"
          component={Link}
          to="/Result"
          className="tabLabel" // tabLabel 클래스 적용
        />
      </Tabs>
    </AppBar>
  );
};



export default Header;
