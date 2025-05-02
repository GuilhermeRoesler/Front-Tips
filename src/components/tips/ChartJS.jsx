import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS2, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS2.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    datasets: [
        {
            label: 'Vendas',
            data: [65, 59, 80, 81],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Gráfico de Vendas' },
    },
};

const ChartJS = () => {
    return (
        <>
            <h1>ChartJS</h1>
            <section id='ChartJS'>
            <Bar data={data} options={options} />
            </section>
        </>
    )
}

export default ChartJS