import sample from "../image/sample.png";
import "./data.css";
import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const products = [
    { type: 'cpu', name: 'AMD', performance: 100, price: 100, manufacturer: 'AMD', release: '2019.11' },
    { type: 'cpu', name: 'Ryzen5', performance: 150, price: 15000, manufacturer: 'AMD', release: '2019.11' },
    { type: 'cpu', name: 'i3-13100', performance: 150, price: 200, manufacturer: 'Intel', release: '2019.11' }
];

export const ProductsList = () => {
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedSort, setSelectedSort] = useState("price");

    const handleProductClick = (index) => {
        // 클릭한 제품의 아코디언 열기/닫기
        setExpandedAccordion(expandedAccordion === index ? null : index);
    };

    const handleSearchChange = (event) => {
        // 검색어 업데이트
        setSearchTerm(event.target.value);
    };

    const handleTypeChange = (event) => {
        // 선택된 제품 타입 업데이트
        setSelectedType(event.target.value);
    };

    const handleSortChange = (event) => {
        // 선택된 정렬 기준 업데이트
        setSelectedSort(event.target.value);
    };

    const getSortedProducts = () => {
        // 선택된 정렬 기준에 따라 제품 정렬
        if (selectedSort === "price") {
            return [...products].sort((a, b) => a.price - b.price);
        }
        // 다른 정렬 기준이 추가될 경우 여기에 추가
        return products;
    };

    return (
        <div>
            <input type="text" placeholder="제품 검색" value={searchTerm} onChange={handleSearchChange} />

            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">전체</option>
                <option value="cpu">CPU</option>
                {/* 다른 제품 타입에 대한 옵션 추가 */}
            </select>

            <select value={selectedSort} onChange={handleSortChange}>
                <option value="price">가격순</option>
                {/* 다른 정렬 기준에 대한 옵션 추가 */}
            </select>

            <ul>
                {getSortedProducts()
                    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())
                        && (selectedType === "" || product.type === selectedType))
                    .map((product, index) => (
                        <li key={index}>
                            <Accordion expanded={expandedAccordion === index} onChange={() => handleProductClick(index)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography>제품 정보</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <img className='pro-icon' src={sample} alt="sample" />
                                        <strong>Type:</strong> {product.type}, <strong>Name:</strong> {product.name}, <strong>Price:</strong> {product.price} <strong>Manufacturer:</strong> {product.manufacturer}, <strong>Release:</strong> {product.release}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
