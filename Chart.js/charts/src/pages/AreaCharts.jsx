import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { randomColorGenerator } from '../components/constant';

const AreaCharts = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );

    const options = {
        responsive: true,
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Area Chart"
        }
    }

    const labels = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: randomColorGenerator(255),
                backgroundColor: randomColorGenerator(255)
            }
        ]
    }

    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <Line options={options} data={data} />
        </div>
    )
}

export default AreaCharts;