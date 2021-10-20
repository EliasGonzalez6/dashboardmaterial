import React, {Component} from "react";
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Group from '@material-ui/icons/Group';
import '../assets/css/cards.css';

class CardLastUser extends Component{
    

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

    traerUsers(){
        this.apiCall('http://localhost:3001/api/lastUser', this.mostrarData );
    }

    mostrarData = (data) => {
        console.log(data);                
        this.setState(
            {
                data:data.users[0].fullname
            }
        )              
    }

    componentDidMount(){
        console.log("Me monte");
        this.traerUsers();
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
                <CardContent className="cardUsers">
                    {<Group></Group>}
                    <Typography>
                    ULTIMO USUARIO
                    </Typography>
    
                    <Typography>
                    {contenido}
                    </Typography>
    
                </CardContent>
            </Card>
        );        
    }
}

export default CardLastUser;