import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import '../css/Navbar.css';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
    // const [openSearch, setOpenSearch] = useState(false);
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
                <Input focusBorderColor='none' color={'gray.300'} type='date' id='dateInput' />
            </Flex>
            <hr style={{margin : '20px 0'}} />
        </Box>
    )
}

export default Navbar;