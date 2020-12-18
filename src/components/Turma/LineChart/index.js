import React from "react";
import { Bar } from 'react-chartjs-2';

const LineChart = (props) => {
    console.log(props.relatorio)
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const data = {
        labels: props.relatorio.map(el=>el.nome),
        datasets: props.relatorio.map((el)=>{
            console.log(el.pontos)
            let color = [randomBetween(0,255),randomBetween(0,255)]
            return ({
                label: el.matricula,
                backgroundColor: `rgba(${color[0]},${color[1]},132,0.2)`,
                borderColor: `rgba(${color[0]},${color[1]},132,1)`,
                borderWidth: 1,
                hoverBackgroundColor: `rgba(${color[0]},${color[1]},132,0.4)`,
                hoverBorderColor: `rgba(${color[0]},${color[1]},132,1)`,
                data: el.pontos
            })
        })
      };
    return (
        <Bar 
            data={data} 
            width={50}
            height={500}
            options={{ maintainAspectRatio: false }}
        />
        );
}
export default LineChart;