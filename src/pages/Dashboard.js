import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';

import CardUsers from '../components/CardUsers';
import CardProducto from '../components/CardProducto';
import CardCategorias from '../components/CardCategorias';

import CardLastProduct from '../components/CardLastProduct';
import CardLastCategory from '../components/CardLastCategory';
import CardLastUser from '../components/CardLastUser';

import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';
import TableProductos from '../components/TableProductos';
import '../assets/css/cards.css';
const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'white'
},
container:{
    paddingTop: '40px',
    alignItems: 'center'
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));

const data = [
    {
      id:1,
      video:
        "1545 Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
      fecha: "6 de sep. 2020",
      visualizaciones: 32,
      imagen: require("../assets/img/split.webp"),
    },
    {
      id:2,
        video:
          "Cómo Solucionar Error al Crear Applicación de React JS",
        fecha: "5 de sep. 2020",
        visualizaciones: 31,
        imagen: require("../assets/img/error.webp"),
      },
      {
      id:3,
        video:
          "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
        fecha: "4 de sep. 2020",
        visualizaciones: 21,
        imagen: require("../assets/img/forever.webp"),
      },
  ];

function Dashboard(props) {    
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <CardCategorias/>                  
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <CardUsers/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>                
                  <CardProducto/>
                </Grid>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <CardLastCategory/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <CardLastUser/>
                    </Grid>
                  
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CardLastProduct/>
                    </Grid>                   
                   
                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                        <Graphics />
                    </Grid>                    

                    <Grid item xs={12} className={classes.containerTabla}>
                      <TableProductos/>
                    </Grid>

            </Grid>
        </div>
    );
}

export default Dashboard;