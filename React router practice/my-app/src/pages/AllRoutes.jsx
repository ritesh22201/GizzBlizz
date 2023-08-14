import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<PrivateRoute>
                    <Products />
                </PrivateRoute>
                } />
            </Routes>
        </Box>
    )
}

export default AllRoutes