import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {isAuth} = useContext(AuthContext);
    return isAuth ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute