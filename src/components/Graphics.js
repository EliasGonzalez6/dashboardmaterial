import React from 'react';
import {Line} from 'react-chartjs-2';
import '../assets/css/Graphics.css';

function Graphics(props) {
    const data={
        labels:["Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre"],
        datasets:[
            {
            label:"Alta de productos",
            fill: false,
            backgroundColor: 'rgba(243,11,11,1)',
            borderColor:'rgba(243,11,11,1)',
            pointBorderColor:'rgba(243,11,11,1)',
            pointBorderWidth:1,
            pointHoverRadius:5,
            pointHoverBackgroundColor:'rgba(243,11,11,1)',
            pointHoverBorderColor:'rgba(243,11,11,1)',
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2, 9, 6, 6, 10, 12]
            }
        ]
    }
    return (
        <div className="containerGrafica">
            <Line data={data}/>
        </div>
    );
}

export default Graphics;