import { useState, useEffect } from "react";
import axios from "axios";

import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

export function UniqueRolesPie(){
    const [roles, setRoles] = useState([]);

    useEffect(()=> {
        // Faz requisição na API 
        axios.get('http://localhost:5000/unique_roles')
        .then(response => setRoles(response.data))
        .catch(error => console.error('Error:',error));
    }, [])

    // Prepara os dados para a biblioteca de gráfico
    const listWorks = roles.map(item => item.cargo);
    const dataValues = roles.map(item => item.quant);

    // Organiza os dados da requisição
    const data = {
        labels: listWorks,
        datasets: [{
            label: "Quantidade Funcionários",
            data: dataValues,
            backgroundColor: [
              "#FF6384", 
              "#36A2EB", 
              "#FFCE56",
              "#4BC0C0", 
              "#9966FF", 
              "#FF9F40",
              "#8AFFC1", 
              "#FF6F91", 
              "#D4A5A5",
              "#A0C4FF", 
              "#BDB2FF", 
              "#FFADAD"
            ],
        },]
    };

    // Configura o Gráfico
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'left'
        }
      }
    };

    // Retorna um gráfico de barras com os dados da requisição
    return (
        <Pie data={data} options={options}/>
    )
}