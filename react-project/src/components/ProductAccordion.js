import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
                            <img className="pro-icon" src={process.env.PUBLIC_URL+product.image} alt={product.name} />
                            <strong>Type:</strong> {product.type}, <strong>Name:</strong> {product.name},{" "}
                            <strong>Price:</strong> {product.price},{" "} <strong>Performance:</strong> {product.performance},{" "}
                            <strong>Manufacturer:</strong> {product.manufacturer},{" "}
                            <strong>Release:</strong> {product.release}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                          <strong>Detail:</strong>
                          {product.detail.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default ProductAccordion;




