import ProductList from "./ProductList";
import React from 'react';
import "../css/Introduce.css";



export const Introduce = () => (
    <>
    <Form />
         <div className="container">
        <ProductList/>
    </div>
    </>
);

export const Form = () => {
  return (
    <div>
      <h1 className="title">부품 목록 </h1>


    </div>
  );
};



