import Estimates from "../data/Estimate";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductModal from "./ProductModal";
import products from "../data/products"
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import {saveAs} from 'file-saver';

import '../css/EstimateTable.css';

/*
견적 페이지에 나타낼 태이블. 여러 종류의 부품을 기입하다보니 이름만으로 텍스트가 너무 길어져서 깔끔하게 하고자 테이블로 표시함
 */

const getTotalPrice = (row) => (
        products.find((product)=>(product.name === row.cpu)).price
        + products.find((product)=>(product.name === row.gpu)).price
        + products.find((product)=>(product.name === row.board)).price
        + products.find((product)=>(product.name === row.ram)).price
        + products.find((product)=>(product.name === row.ssd)).price
        + products.find((product)=>(product.name === row.power)).price
        + products.find((product)=>(product.name === row.computerCase)).price
)

const getTotalPerformance = (row) => (
        products.find((product)=>(product.name === row.cpu)).performance
        + products.find((product)=>(product.name === row.gpu)).performance
        + products.find((product)=>(product.name === row.board)).performance
        + products.find((product)=>(product.name === row.ram)).performance
        + products.find((product)=>(product.name === row.ssd)).performance
        + products.find((product)=>(product.name === row.power)).performance
        + products.find((product)=>(product.name === row.computerCase)).performance
)

const arrayToFile= data=> {
    const file = new Blob([JSON.stringify(data)],{type: 'text/plain;charset=utf-8'});
    saveAs(file, "컴퓨터 견본 견적.txt");
}

const EstimateTable = ()=> (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell  className="table">견적 종류</TableCell>
                        <TableCell className="table" >cpu</TableCell>
                        <TableCell className="table" >gpu</TableCell>
                        <TableCell className="table" >메인보드</TableCell>
                       <TableCell className="table" >램</TableCell>
                        <TableCell className="table" >SSD</TableCell>
                        <TableCell className="table" >파워</TableCell>
                       <TableCell className="table" >팬</TableCell>
                        <TableCell className="table" >케이스</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Estimates.map((row)=>(
                        <TableRow
                            key={row.type}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="table_type" component="th" scope="row">
                                {row.type}
                                <p>{"총 가격: "+getTotalPrice(row)}</p>
                                <p>{"총 성능: "+getTotalPerformance(row)}</p>
                                <Button onClick={()=>arrayToFile(row)}> <DownloadIcon/></Button>
                            </TableCell>
                            <TableCell className="tableL" >{row.cpu}{ProductModal(row.cpu)}</TableCell>
                            <TableCell className="tableL" >{row.gpu}{ProductModal(row.gpu)}</TableCell>
                            <TableCell className="tableL" >{row.board}{ProductModal(row.board)}</TableCell>
                            <TableCell className="tableL" >{row.ram}{ProductModal(row.ram)}</TableCell>
                            <TableCell className="tableL" >{row.ssd}{ProductModal(row.ssd)}</TableCell>
                            <TableCell className="tableL" >{row.power}{ProductModal(row.power)}</TableCell>
                            <TableCell className="tableL" >{row.fan}{ProductModal(row.fan)}</TableCell>
                            <TableCell className="tableL" >{row.computerCase}{ProductModal(row.computerCase)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )


export default EstimateTable;
