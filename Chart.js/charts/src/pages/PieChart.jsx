import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { randomColorGenerator } from '../components/constant';

const PieChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets : [
            {
                label : '# of votes',
                data : [12, 19, 3, 5, 2, 3],
                backgroundColor : [
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                ],
                borderColor : [
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                    randomColorGenerator(255),
                ],
                borderWidth : 1,
            }
        ]
    }
  return (
    <div style={{width : '50%', margin : 'auto'}}>
        <Pie data={data}/>
    </div>
  )
}

export default PieChart;