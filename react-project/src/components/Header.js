import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Tabs>
        <Tab label="Home" component={Link} to="/" />
        <Tab label="About" component={Link} to="/About" />
        <Tab label="부품 페이지" component={Link} to="/Introduce" />
        <Tab label="견적 페이지" component={Link} to="/Result" />
      </Tabs>
    </AppBar>
  );
};

export default Header;
