import {useLocation} from "react-router-dom";
import Carousel from './Carousel';
import React from 'react';
import Header from './Header';
import "../css/Pages.css";

export const Home = () => {
  return (

        <>
          <Header />



          <div className="main_box">

          <Carousel />
          </div>
          </>
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
