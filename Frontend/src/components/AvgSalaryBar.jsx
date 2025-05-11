import { useState, useEffect } from "react";
import axios from "axios";

import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
  } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels);

export function AvgsalaryBar(){
    const [avgsalary, setAvgSalary] = useState([]);

    useEffect(()=> {
        // Faz requisição na API 
        axios.get('http://localhost:5000/avg_salary')
        .then(response => setAvgSalary(response.data))
        .catch(error => console.error('Error:',error));
    }, [])

    // Prepara os dados para a biblioteca de gráfico
    const listWork = avgsalary.map(item => item.cargo);
    const dataValues = avgsalary.map(item => item.media);

    const maxValue = parseInt(Math.max(...dataValues) * 1.10); // Calcula o valor máximo para o eixo Y

    // Organiza os dados da requisição
    const data = {
        labels: listWork,
        datasets: [{
            label: "Média Salarial",
            data: dataValues,
            backgroundColor: [
              "#1E88Ef", "#2196F3", "#42A5F5", 
              "#64B5F6", "#72A0C1",  "#72A0CF",  
              "#82B1FF",  "#90CAF9", "#A0C4FF", 
              "#B3D1FF",  "#BBDEFB", "#D0E7FF", 
            ],
        },]
    };

    // Configurações do Gráfico
    const options = {
      plugins: {
        datalabels: {
            display: true,
            anchor: 'end',
            align: 'end', 
            font: {
              size: 12 // Ajusta o tamanho da fonte
            },
        },
      },
      scales: {
        y: {
            beginAtZero: true, 
            max: maxValue, // Ajusta o valor do eixo Y conforme o maior valor
        },
      },
      title: {
          text: 'Média Salarial por Cargo',
        }
      };

    // Retorna um gráfico de barras com os dados da requisição
    return (
        <Bar data={data} options={options}/>
    )
}