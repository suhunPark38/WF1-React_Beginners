import React from "react";

const SearchFilter = ({ searchTerm, onSearchChange, selectedType, onTypeChange, selectedSort, onSortChange }) => {
    return (
        <div>
            <input type="text" placeholder="제품 검색" value={searchTerm} onChange={onSearchChange} />

            <select value={selectedType} onChange={onTypeChange}>
                <option value="">전체</option>
                <option value="cpu">CPU</option>
                <option value="motherboard">메인보드</option>
                <option value="ram">램</option>
                <option value="ssd">SSD</option>
                <option value="power">파워</option>
                <option value="case">케이스</option>
                <option value="cooler">쿨러</option>
                {/* 다른 제품 타입에 대한 옵션 추가 */}
            </select>

            <select value={selectedSort} onChange={onSortChange}>
                <option value="priceHigh">높은 가격순</option>
                <option value="priceLow">낮은 가격순</option>
                <option value="performanceHigh">높은 성능순</option>
                <option value="performanceLow">낮은 성능순</option>
                <option value="nameAscending">이름 오름차순</option>
                <option value="nameDescending">이름 내림차순</option>
                <option value="releaseDate">출시순</option>
                <option value="latest">최신순</option>
                {/* 다른 정렬 기준에 대한 옵션 추가 */}
            </select>
        </div>
    );
};

export default SearchFilter;
