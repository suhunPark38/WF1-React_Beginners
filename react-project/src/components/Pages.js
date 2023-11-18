import {useLocation, Link} from "react-router-dom";
import ProductList from "./ProductList";
import Carousel from './Carousel';
import EstimateTable from "./EstimateTable";

import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Header from './Header';
import "../css/Pages.css";

export const Home = () => {
  return (

        <>
          <Header />


          <Form />
          <div className="container">

          <Carousel />
          </div>
          </>



      );
    };


export const Form = () => {
  return (
    <div>
      <h1 className="title">컴퓨터 견적도우미 </h1>
      <EstimateTable/>
    </div>
  );
};







export const Whoops404 = () => {
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
};
