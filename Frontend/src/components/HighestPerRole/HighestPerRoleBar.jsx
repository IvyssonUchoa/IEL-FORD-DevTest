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

import './HighestPerRoleBar.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels);

export function HighestPerRoleBar(){
    const [reqData, setReqData] = useState([]);

    useEffect(()=> {
        // Faz requisição na API 
        axios.get('http://localhost:5000/highest_per_role')
        .then(response => setReqData(response.data))
        .catch(error => console.error('Error:',error));
    }, [])

    // Prepara os dados para a biblioteca de gráfico
    const listWorks = reqData.map(item => item.cargo);
    const listNames = reqData.map(item => item.nome);
    const dataValues = reqData.map(item => item.salario);

      // Gera uma cor aleatória para cada cargo
    const workColor = {
        "Gerente": "#FF6384",
        "Gerente de Vendas": "#36A2EB",
        "Gerente de Marketing": "#FFCE56",
        "Gerente de Projetos": "#4BC0C0",
        "Analista": "#9966FF",
        "Analista de Negócios": "#FF9F40",
        "Analista de Sistemas": "#8AFFC1",
        "Analista de Dados": "#FF6F91",
        "Desenvolvedor": "#D4A5A5",
        "Desenvolvedora": "#A0C4FF",
        "Designer": "#BDB2FF",
        "Tester": "#FFADAD",
    }
    const barColors = listWorks.map(cargo => workColor[cargo] || "#D0E7FF");

    // Organiza os dados da requisição
    const data = {
        labels: listNames,
        datasets: [{
            label: "Valor Salarial",
            data: dataValues,
            backgroundColor: barColors,
        },]
    };

    // Configura o Gráfico
    const options = {
        plugins: {
            datalabels: {
                display: true,
            },
            legend: {
                display: false, // Desativa a legenda padrão do gráfico
            },
        },
        title: {
          text: 'Maiores salários de Funcioário por função',
        },
      };

    // Retorna um gráfico de barras com os dados da requisição
    return (
        // Cria a legenda das cores 
        <div className="highest-per-role-container">
            <div>
                <h4>Cargos por Cor</h4>
                <ul className="highest-per-role-legend">
                    {Object.entries(workColor).map(([cargo, color]) => (
                        <li key={cargo}>
                            <span
                                className="color-box"
                                style={{ backgroundColor: color }}
                            ></span>
                            <span>{cargo}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cria o gráfico */}
            <div style={{ flex: 1 }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}