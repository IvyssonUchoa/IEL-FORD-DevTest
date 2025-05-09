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
    const listCargo = avgsalary.map(item => item.cargo);
    const dataValues = avgsalary.map(item => item.media);

    // Organiza os dados da requisição
    const data = {
        labels: listCargo,
        datasets: [{
            label: "Média Salarial",
            data: dataValues
        },]
    };

    // Configura o Gráfico
    const options = {
        datalabels: {
          display: true
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