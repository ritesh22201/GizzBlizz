import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const MainRoutes = () => {
  return (
    <Box>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<h1>Page Not Found..</h1>}/>
        </Routes>
    </Box>
  )
}

export default MainRoutes