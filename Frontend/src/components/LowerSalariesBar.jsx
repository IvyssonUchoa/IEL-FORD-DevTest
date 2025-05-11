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

export function LowerSalariesBar(){
    const [topSalary, setTopSalary] = useState([]);

    useEffect(()=> {
        // Faz requisição na API 
        axios.get('http://localhost:5000/lower_salaries')
        .then(response => setTopSalary(response.data))
        .catch(error => console.error('Error:',error));
    }, [])

    // Prepara os dados para a biblioteca de gráfico
    const workers = topSalary.map(item => item.nome);
    const dataValues = topSalary.map(item => item.salario);

    // Organiza os dados da requisição
    const data = {
        labels: workers.reverse(),
        datasets: [{
            label: "Salário",
            data: dataValues.reverse(),
            backgroundColor: [
              "#82B1FF",  "#90CAF9", "#A0C4FF", 
              "#B3D1FF",  "#BBDEFB", "#D0E7FF", 
              "#1E88FF", "#2196F3", "#42A5F5", 
              "#64B5F6", "#72A0C1",  "#72A0CF",  
            ],
        },]
    };

    // Configura o Gráfico
    const options = {
        datalabels: {
          display: true
        },
        title: {
          text: 'Top 5 Menores Salários',
        }
      };

    // Retorna um gráfico de barras com os dados da requisição
    return (
        <Bar data={data} options={options}/>
    )
}