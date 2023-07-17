import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Posts from '../pages/Posts';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes