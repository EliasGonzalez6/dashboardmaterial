import React, {Component} from "react";
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Airplay from '@material-ui/icons/Airplay';
import '../assets/css/cards.css';

class CardLastProduct extends Component{
    

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

    traerProducto(){
        this.apiCall("http://localhost:3001/api/lastProduct", this.mostrarData );
    }

    mostrarData = (data) => {
        console.log(data);                
        this.setState(
            {
                data:data.products[0].name
            }
        )              
    }

    componentDidMount(){
        console.log("Me monte");
        this.traerProducto();
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
            <Card>
                <CardContent className="cardProducto">
                    {<Airplay></Airplay>}
                    <Typography>
                    ULTIMO PRODUCTO
                    </Typography>
    
                    <Typography>
                    {contenido}
                    </Typography>    
                </CardContent>
            </Card>
        );        
    }
}

export default CardLastProduct;