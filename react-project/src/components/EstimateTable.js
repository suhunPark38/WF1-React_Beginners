import estimates from "../data/Estimate";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EstimateTable = ()=> {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>견적 종류</TableCell>
                        <TableCell align="right">cpu</TableCell>
                        <TableCell align="right">gpu</TableCell>
                        <TableCell align="right">메인보드</TableCell>
                        <TableCell align="right">램</TableCell>
                        <TableCell align="right">SSD</TableCell>
                        <TableCell align="right">파워</TableCell>
                        <TableCell align="right">팬</TableCell>
                        <TableCell align="right">케이스</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {estimates.map((row)=>(
                        <TableRow
                            key={row.type}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.type}
                            </TableCell>
                            <TableCell align="right">{row.cpu}</TableCell>
                            <TableCell align="right">{row.gpu}</TableCell>
                            <TableCell align="right">{row.board}</TableCell>
                            <TableCell align="right">{row.ram}</TableCell>
                            <TableCell align="right">{row.ssd}</TableCell>
                            <TableCell align="right">{row.power}</TableCell>
                            <TableCell align="right">{row.fan}</TableCell>
                            <TableCell align="right">{row.computerCase}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EstimateTable;
