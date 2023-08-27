import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChartHorizontal from '../pages/ChartHorizontal';
import StackedBarGraph from '../pages/StackedBarGraph';
import GroupedStack from '../pages/GroupedStack';
import LineGraph from '../pages/LineGraph';
import AreaCharts from '../pages/AreaCharts';
import PieChart from '../pages/PieChart';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ChartHorizontal />} />
            <Route path='/stackBar' element={<StackedBarGraph />} />
            <Route path='/groupStack' element={<GroupedStack />} />
            <Route path='/line' element={<LineGraph />} />
            <Route path='/area' element={<AreaCharts />} />
            <Route path='/pie' element={<PieChart />} />
        </Routes>
    )
}

export default AllRoutes;