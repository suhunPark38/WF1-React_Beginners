import React from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "../css/SearchFilter.css"; // 스타일시트를 import

const SearchFilter = ({
  searchTerm,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedSort,
  onSortChange,
}) => {
  return (
    <div>
      <TextField
        label="제품 검색"
        placeholder="제품 검색"
        value={searchTerm}
        onChange={onSearchChange}
      />

      <FormControl className="searchFormControl"> {/* 클래스를 적용 */}
        <InputLabel>제품 타입</InputLabel>
        <Select value={selectedType} onChange={onTypeChange}>
          <MenuItem value="">전체</MenuItem>
          <MenuItem value="CPU">CPU</MenuItem>
          <MenuItem value="gpu">GPU</MenuItem>
          <MenuItem value="메인보드">메인보드</MenuItem>
          <MenuItem value="램">램</MenuItem>
          <MenuItem value="SSD">SSD</MenuItem>
          <MenuItem value="파워">파워</MenuItem>
          <MenuItem value="케이스">케이스</MenuItem>
          <MenuItem value="쿨러">쿨러</MenuItem>
          {/* 다른 제품 타입에 대한 옵션 추가 */}
        </Select>
      </FormControl>

      <FormControl className="sortFormControl"> {/* 클래스를 적용 */}
        <InputLabel>정렬 기준</InputLabel>
        <Select value={selectedSort || "priceHigh"} onChange={onSortChange}>
          <MenuItem value="priceHigh">높은 가격순</MenuItem>
          <MenuItem value="priceLow">낮은 가격순</MenuItem>
          <MenuItem value="performanceHigh">높은 성능순</MenuItem>
          <MenuItem value="performanceLow">낮은 성능순</MenuItem>
          <MenuItem value="nameAscending">이름 오름차순</MenuItem>
          <MenuItem value="nameDescending">이름 내림차순</MenuItem>
          <MenuItem value="releaseDate">출시순</MenuItem>
          <MenuItem value="latest">최신순</MenuItem>
          {/* 다른 정렬 기준에 대한 옵션 추가 */}
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchFilter;
