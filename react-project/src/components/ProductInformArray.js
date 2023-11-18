import React from "react";

/*
product 정보 배열을 넘겨주는 컴포넌트
 */

const ProductInformArray= (product) =>(
    <>
    <img className="pro-icon" src={process.env.PUBLIC_URL+product.image} alt={product.name} />
<strong>Type:</strong> {product.type}, <strong>Name:</strong> {product.name},{" "}
<strong>Price:</strong> {product.price},{" "} <strong>Performance:</strong> {product.performance},{" "}
<strong>Manufacturer:</strong> {product.manufacturer},{" "}
<strong>Release:</strong> {product.release}
    </>
)

export default ProductInformArray;