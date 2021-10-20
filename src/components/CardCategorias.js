import React, {Component} from "react";
import {Card, Typography, CardContent,} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Layers from '@material-ui/icons/Layers';
import '../assets/css/cards.css';

class CardCategorias extends Component{
    
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

    traerCategorias(){
        this.apiCall('http://localhost:3001/api/category', this.mostrarData );
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
        this.traerCategorias();
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
                <CardContent className="cardCategorias">
                    {<Layers></Layers>}
                    <Typography>
                    CATEGORIAS
                    </Typography>
    
                    <Typography>
                    {contenido}
                    </Typography>
    
                </CardContent>
            </Card>
        );        
    }
}

export default CardCategorias;