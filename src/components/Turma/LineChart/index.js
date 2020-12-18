import React from "react";
import { Bar } from 'react-chartjs-2';

const LineChart = (props) => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let arrCores = props.relatorio.map(el=>`rgba(${randomBetween(0,255)},${randomBetween(0,255)},${randomBetween(0,255)},1)`)
    const data = {
        labels: props.relatorio.map(el=>el.nome),
        datasets: [
          {
            label: 'Turma',
            backgroundColor: arrCores,
            borderColor: arrCores,
            borderWidth: 1,
            hoverBackgroundColor: arrCores,
            hoverBorderColor: arrCores,
            data: props.relatorio.map(el=>parseInt(el.pontos))
          }
        ]
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