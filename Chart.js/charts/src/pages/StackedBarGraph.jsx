import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { randomColorGenerator } from '../components/constant';

const StackedBarGraph = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart - Stacked'
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }

  const labels = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: randomColorGenerator(255)
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: randomColorGenerator(255)
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: randomColorGenerator(255)
      },
    ]
  }

  return (
    <div style={{width : '70%', margin : 'auto'}}>
      <Bar options={options} data={data} />
    </div>
  )
}

export default StackedBarGraph;