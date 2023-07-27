import { Box, Button, Flex, Heading, Icon, Input, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import '../css/Navbar.css';
import { FaPlus, FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getTodos } from '../redux/todosReducer/action';
import { logout } from '../redux/authReducer/action';

const Navbar = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const value: string | null = localStorage.getItem('token');
    const token: { [key: string]: any } | null = value ? JSON.parse(value) : null;
    const [dateInput, setDateInput] = useState<string>('');
    const { isOpen } = useDisclosure();

    useEffect(() => {
        dispatch(getTodos(token?.token));
    }, [token])

    let monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const date = today.getDate() + ' ' + monthArr[today.getMonth()] + ' ' + today.getFullYear() + ', ' + dayArr[today.getDay()];

    const handleLogout = () => {
        dispatch(logout(token?.token))
        localStorage.removeItem('token');
    }

    return (
        <Box p={'10px 30px'} margin={'auto'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Heading color={'white'} as={'h1'} size={'lg'} >Today</Heading>
                    <Text color={'gray.300'}>{date}</Text>
                </Box>
                <Flex position={'relative'} alignItems={'center'}>
                    {token?.token && <FaUserAlt className='userIcon' color='white' />}
                    {token?.token && <Box className='userBox' borderRadius={'5px'} position={'absolute'} right={'87px'} top={'39px'} bg={'#041955'} p={'20px'}>
                        <Text mb={'10px'} color={'white'} size={'md'}>{token?.name}</Text>
                        {token && <Text className='logout' cursor={'pointer'} size={'md'} onClick={handleLogout} color={'white'}>Logout</Text>}
                    </Box>}
                    <Input mt={'20px'} value={dateInput} onChange={(e) => setDateInput(e.target.value)} focusBorderColor='none' color={'gray.300'} type='date' id='dateInput' />
                </Flex>
            </Flex>
            <hr style={{ margin: '20px 0' }} />
        </Box>
    )
}

export default Navbar;