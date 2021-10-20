import React, {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import '../assets/css/cards.css';

class TableProductos extends Component{
    
    constructor(props){
        super(props);     
        this.state = {
            products: []
        }     
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/product")
            .then(respuesta => { 
                return respuesta.json() 
            })
            .then(resp => { 
                const limit = 5;
                this.setState({
                    products: resp.products.slice(0, limit)
                }) 
            })
            .catch(error => console.log(error))
    }

    render(){
        console.log("Estoy renderizando");

        return (
            <TableContainer>
            <Table>
            <TableHead>
                <TableRow className="TableRow">               
                    <TableCell align="center"><strong>Nombre</strong></TableCell> 
                    <TableCell align="center"><strong>Marca</strong></TableCell>
                    <TableCell align="center"><strong>Categoria</strong></TableCell> 
                    <TableCell align="center"><strong>Precio</strong></TableCell> 
                    <TableCell align="center"><strong>Stock</strong></TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>       
                { this.state.products.map(product =>         
                    <TableRow>                        
                        <TableCell align="center">{product.name}</TableCell>
                        <TableCell align="center">{product.brands.name}</TableCell>
                        <TableCell align="center">{product.categories.name}</TableCell>
                        <TableCell align="center">{product.price}</TableCell>
                        <TableCell align="center">{product.stock}</TableCell>
                    </TableRow>   
                )}             
            </TableBody>
            </Table>
        </TableContainer>
        );
    }
}

export default TableProductos;