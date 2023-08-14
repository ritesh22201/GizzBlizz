import { Box, Button, Flex, Toast, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const loginToken = JSON.parse(localStorage.getItem('pr-token')) || '';
    const toast = useToast();

    const handleLogout = () => {
        setIsAuth(false);
        localStorage.removeItem('pr-token');
        toast({
            title: 'Success',
            description: "Logout Successful",
            status: 'success',
            duration: 4000,
            position: 'top',
            isClosable: true,
        })
        window.location.reload();
    }

    return (
        <Flex p={'18px 0'} mb={'20px'} justifyContent={'space-around'} bg={'teal'} fontWeight={'bold'} color={'white'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Product</Link>
            <Link to={'/login'}>Login</Link>
            {loginToken && <Button onClick={handleLogout}>Logout</Button> }
        </Flex>
    )
}

export default Navbar