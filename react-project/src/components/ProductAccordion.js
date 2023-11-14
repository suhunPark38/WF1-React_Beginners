import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sample from "../image/sam ple.png";
import products from "../data/products";
import "../css/data.css";

const ProductAccordion = ({ sortedProducts, expandedAccordion, onProductClick }) => {
    return (
        <div>
            {sortedProducts.map((product, index) => (
                <Accordion expanded={expandedAccordion === index} onChange={() => onProductClick(index)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography>
                            <img className="pro-icon" src={sample} alt="sample" />
                            <strong>Type:</strong> {product.type}, <strong>Name:</strong> {product.name},{" "}
                            <strong>Price:</strong> {product.price} <strong>Manufacturer:</strong> {product.manufacturer},{" "}
                            <strong>Release:</strong> {product.release}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <strong>Detail:</strong> {product.detail}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default ProductAccordion;
