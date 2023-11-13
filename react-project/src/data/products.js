import sample from "../image/sample.png";
import React from "react";
import "./data.css"

const products = [
    { type: 'cpu', name: 'AMD', performance:100, price: 100, manufacturer:'AMD', release:'2019.11'},
    { type: 'cpu', name: 'Ryzen5',performance:150 , price: 150, manufacturer:'AMD', release:'2019.11'},
    { type: 'cpu', name: 'i3-13100',performance:150 , price: 200, manufacturer:'Intel', release:'2019.11'}
];

export const ProductsList = () => (
    <div>
        <ui>
            {products.map((products, index)=>(
                <li className='product' key={index}>
                    <img className='pro-icon' src={sample} alt="sample"/>
                    <strong>Type:</strong> {products.type}, <strong>Name:</strong> {products.name}, <strong>Price:</strong> {products.price} <strong>Manufacturer:</strong> {products.manufacturer}, <strong>Release:</strong> {products.release}
                </li>
            ))}
        </ui>
    </div>
);