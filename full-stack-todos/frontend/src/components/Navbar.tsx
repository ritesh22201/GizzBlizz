import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import '../css/Navbar.css';

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    let monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const date = today.getDate() + ' ' + monthArr[today.getMonth()] + ' ' + today.getFullYear() + ', ' + dayArr[today.getDay()];

    return (
        <Box p={'10px 30px'} w={'57%'} margin={'auto'} bg={'#3450a1'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Heading color={'white'} as={'h1'} size={'lg'} >Today</Heading>
                    <Text color={'gray.300'}>{date}</Text>
                </Box>
                <Flex alignItems={'center'} gap={'20px'}>
                    {!openSearch ?
                        <BsSearch onClick={() => setOpenSearch(true)} fontSize={'25px'} color='#CBD5E0' />
                        :
                        <Input focusBorderColor='none' m={'20px 0'} color={'gray.300'} type='text' placeholder='Search...' />
                    }
                    <Input focusBorderColor='none' color={'gray.300'} type='date' id='dateInput' value={'none'} />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;