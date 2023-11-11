import React from "react";

const products = [
    { name: 'Product1', price: 100 },
    { name: 'Product2', price: 200 },
    { name: 'Product3', price: 300 },
    { name: 'Product4', price: 400 },
    { name: 'Product5', price: 500 },
    { name: 'Product6', price: 600 },
    { name: 'Product7', price: 700 },
    { name: 'Product8', price: 800 },
    { name: 'Product9', price: 900 },
    { name: 'Product10', price: 1000 }
];

export const ProductsList = () => (
    <div>
        <ui>
            {products.map((products, index)=>(
                <li key={index}>
                    <strong>Name:</strong> {products.name}, <strong>Price:</strong> {products.price}
                </li>
            ))}
        </ui>
    </div>
);