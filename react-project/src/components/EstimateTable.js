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

/*
견적 페이지에 나타낼 태이블. 여러 종류의 부품을 기입하다보니 이름만으로 텍스트가 너무 길어져서 깔끔하게 하고자 테이블로 표시함
할 수 있다면 이미지 or 최종 가격 정도는 표시하면 좋을듯
 */
const EstimateTable = ()=> {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>견적 종류</TableCell>
                        <TableCell align="center">cpu</TableCell>
                        <TableCell align="center">gpu</TableCell>
                        <TableCell align="center">메인보드</TableCell>
                        <TableCell align="center">램</TableCell>
                        <TableCell align="center">SSD</TableCell>
                        <TableCell align="center">파워</TableCell>
                        <TableCell align="center">팬</TableCell>
                        <TableCell align="center">케이스</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Estimates.map((row)=>(
                        <TableRow
                            key={row.type}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.type}
                            </TableCell>
                            <TableCell align="left">{row.cpu}{ProductModal(row.cpu)}</TableCell>
                            <TableCell align="left">{row.gpu}{ProductModal(row.gpu)}</TableCell>
                            <TableCell align="left">{row.board}{ProductModal(row.board)}</TableCell>
                            <TableCell align="left">{row.ram}{ProductModal(row.ram)}</TableCell>
                            <TableCell align="left">{row.ssd}{ProductModal(row.ssd)}</TableCell>
                            <TableCell align="left">{row.power}{ProductModal(row.power)}</TableCell>
                            <TableCell align="left">{row.fan}{ProductModal(row.fan)}</TableCell>
                            <TableCell align="left">{row.computerCase}{ProductModal(row.computerCase)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EstimateTable;
