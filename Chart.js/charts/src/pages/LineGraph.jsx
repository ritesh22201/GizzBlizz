import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { randomColorGenerator } from '../components/constant';

const LineGraph = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const options = {
        reponsive : true,
        plugins : {
            legend : {
                position : 'top'
            },
            title : {
                display : true,
                text : 'Line Chart'
            }
        },
    }

    const labels = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const data = {
        labels, 
        datasets : [
            {
                label : 'Dataset 1',
                data : labels.map(() => faker.datatype.number({min : -1000, max : 1000})),
                backgroundColor : randomColorGenerator(255),
                borderColor : randomColorGenerator(255)
            },
            {
                label : 'Dataset 2',
                data : labels.map(() => faker.datatype.number({min : -1000, max : 1000})),
                backgroundColor : randomColorGenerator(255),
                borderColor : randomColorGenerator(255)
            }
        ]
    }

    return (
        <div style={{width : '70%', margin : 'auto'}}>
            <Line options={options} data={data}/>
        </div>
    )
}

export default LineGraph;
