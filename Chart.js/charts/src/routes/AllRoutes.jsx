import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChartHorizontal from '../pages/ChartHorizontal';
import StackedBarGraph from '../pages/StackedBarGraph';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ChartHorizontal />} />
            <Route path='/stackBar' element={<StackedBarGraph />} />
        </Routes>
    )
}

export default AllRoutes;