import React, {Component} from "react";

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
                data:data.products[1].name                
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
            <div>
                {contenido}
            </div>
        );
    }
}

export default TableProductos;