// ProductList.js
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import ProductAccordion from "./ProductAccordion";
import products from "../data/products";

const ProductList = () => {
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedSort, setSelectedSort] = useState("price");

    const handleProductClick = (index) => {
        setExpandedAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const onTypeChange = (event) => {
        handleInputChange(event, setSelectedType);
    };

    const handleSortChange = (event) => {
        handleInputChange(event, setSelectedSort);
    };

  // Inside ProductList.js

  const getSortedProducts = () => {
      let filteredProducts = [...products];
  if (searchTerm) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
      if (selectedType) {
          filteredProducts = filteredProducts.filter((product) => product.type === selectedType);
      }

      switch (selectedSort) {
          case "priceHigh":
              return filteredProducts.sort((a, b) => b.price - a.price);
          case "priceLow":
              return filteredProducts.sort((a, b) => a.price - b.price);
          case "performanceHigh":
              return filteredProducts.sort((a, b) => b.performance - a.performance);
          case "performanceLow":
              return filteredProducts.sort((a, b) => a.performance - b.performance);
          case "nameAscending":
              return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          case "nameDescending":
              return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          case "releaseDate":
              return filteredProducts.sort((a, b) => new Date(a.release) - new Date(b.release));
           case "latest":
              return filteredProducts.sort((a, b) => new Date(b.release) - new Date(a.release));
          default:
              return filteredProducts;
      }
  };


    return (
        <div>
            <SearchFilter
                searchTerm={searchTerm}
                onSearchChange={(event) => handleInputChange(event, setSearchTerm)}
                selectedType={selectedType}
                onTypeChange={onTypeChange}
                selectedSort={selectedSort}
                onSortChange={handleSortChange}
            />
            <ProductAccordion
                sortedProducts={getSortedProducts()}
                expandedAccordion={expandedAccordion}
                onProductClick={handleProductClick}
            />
        </div>
    );
};

export default ProductList;
