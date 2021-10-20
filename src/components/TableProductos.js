import React, {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import logo from '../assets/img/logo.jpg';

class TableProductos extends Component{
    
    constructor(props){
        super(props);     
        this.state = {
            data: []
        }     
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error) )
    }   

    traerProductos(){
        this.apiCall('http://localhost:3001/api/product', this.mostrarData );
    }

    mostrarData = (data) => {
        console.log(data);                
        this.setState(
            {
                data:data.count             
            }
        )              
    }


    componentDidMount(){
        console.log("Me monte");
        this.traerProductos();
    }

    componentDidUpdate(){
        console.log("Me actualice");
    }

    render(){
        console.log("Estoy renderizando");

        let contenido;

        if(this.state.data==""){
            contenido = <p>Cargando...</p>
        }else{
            contenido = <p>{this.state.data}</p>
        }

        return (
            <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <TableCell>Imagen</TableCell> 
               <TableCell>Nombre</TableCell> 
               <TableCell>Marca</TableCell>
               <TableCell>Categoria</TableCell> 
               <TableCell>Precio</TableCell> 
               <TableCell>Stock</TableCell> 
            </TableRow>
            </TableHead>
            <TableBody>                
                    <TableRow>
                        <TableCell><img src={logo} width="35px" height="25px"/>{"  "}</TableCell>
                        <TableCell align="center">{this.state.data}</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>                
            </TableBody>
            </Table>
        </TableContainer>
        );
    }
}

export default TableProductos;