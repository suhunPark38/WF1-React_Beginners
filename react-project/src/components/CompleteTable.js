// EstimateTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CompleteTable = ({ data }) => {
  const calculateTotalPrice = () => {
    return data.reduce((total, product) => total + product.price, 0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>분류</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>제품명</TableCell>
            <TableCell>가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.type}</TableCell>
              <TableCell><img className="pro-icon" src={process.env.PUBLIC_URL + product.image} alt={product.name} /></TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>총 가격</TableCell>
            <TableCell>{calculateTotalPrice()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompleteTable;
