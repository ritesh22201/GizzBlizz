import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChartHorizontal from '../pages/ChartHorizontal';
import StackedBarGraph from '../pages/StackedBarGraph';
import GroupedStack from '../pages/GroupedStack';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ChartHorizontal />} />
            <Route path='/stackBar' element={<StackedBarGraph />} />
            <Route path='/groupStack' element={<GroupedStack />} />
        </Routes>
    )
}

export default AllRoutes;