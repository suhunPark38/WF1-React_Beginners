import sample from "../image/sample.png";
import "./data.css";
import {Accordion, AccordionSummary, Typography} from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const products = [
    { type: 'cpu', name: 'AMD', performance:100, price: 100, manufacturer:'AMD', release:'2019.11', detail:'123'},
    { type: 'cpu', name: 'Ryzen5',performance:150 , price: 150, manufacturer:'AMD', release:'2019.11', detail:'456'},
    { type: 'cpu', name: 'i3-13100',performance:150 , price: 200, manufacturer:'Intel', release:'2019.11', detail:'789'}
];

const BasicAcco = () => {
    return (
        <ui>
            {products.map((products, index)=>(
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                      <img className='pro-icon' src={sample} alt="sample"/>
                      <strong>Type:</strong> {products.type}, <strong>Name:</strong> {products.name}, <strong>Price:</strong> {products.price} <strong>Manufacturer:</strong> {products.manufacturer}, <strong>Release:</strong> {products.release}
                  </AccordionSummary>
                    <Typography>
                        <strong>Detail:</strong> {products.detail}
                        </Typography>
                </Accordion>
            ))}
        </ui>

    );
}

export const ProductsList = () => (
    <>
        <BasicAcco/>
    </>
);