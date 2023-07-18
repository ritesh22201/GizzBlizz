import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import '../css/Navbar.css';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getTodos } from '../redux/todosReducer/action';

const Navbar = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const auth = JSON.parse(localStorage.getItem('isAuth') || 'false');
    const [dateInput, setDateInput] = useState<string>('');

    useEffect(() => {
        dispatch(getTodos());
    }, [])

    let monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const date = today.getDate() + ' ' + monthArr[today.getMonth()] + ' ' + today.getFullYear() + ', ' + dayArr[today.getDay()];

    return (
        <Box p={'10px 30px'} margin={'auto'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Heading color={'white'} as={'h1'} size={'lg'} >Today</Heading>
                    <Text color={'gray.300'}>{date}</Text>
                </Box>
                <Box>
                    {auth && <Button color={'red'}>Logout</Button>}
                    <Input value={dateInput} onChange={(e) => setDateInput(e.target.value)} focusBorderColor='none' color={'gray.300'} type='date' id='dateInput' />
                </Box>
            </Flex>
            <hr style={{ margin: '20px 0' }} />
        </Box>
    )
}

export default Navbar;