import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import logo from '../assets/img/logo.jpg';

const StyledTableCell= withStyles(()=>({
    head:{
        color: 'white',
        background: 'black',
        textAlign: 'center'
    },
   body:{
        fontSize: 14,
    },
    }))(TableCell);

function TableMaterial(props) {
    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <StyledTableCell>Imagen</StyledTableCell> 
               <StyledTableCell>Nombre</StyledTableCell> 
               <StyledTableCell>Marca</StyledTableCell>
               <StyledTableCell>Categoria</StyledTableCell> 
               <StyledTableCell>Precio</StyledTableCell> 
               <StyledTableCell>Stock</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={logo} width="35px" height="25px"/>{"  "}</TableCell>
                        <TableCell align="center">{elemento.video}</TableCell>
                        <TableCell align="center">{elemento.visualizaciones}</TableCell>
                        <TableCell align="center">{elemento.visualizaciones}</TableCell>
                        <TableCell align="center">{elemento.visualizaciones}</TableCell>
                        <TableCell align="center">{elemento.visualizaciones}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial;