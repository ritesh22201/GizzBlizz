import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { FaO, FaXmark } from 'react-icons/fa6';
import { GrPowerReset } from 'react-icons/gr';
import Confetti from './Confetti';

const TicTacToe = () => {
    return (
        <Box bg={'#203138'} h={'100vh'}>
            <Box w={'46%'} m={'auto'} p={'20px'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} fontWeight={'bold'} color={'white'}>
                        <FaXmark fontSize={'32px'} color='#37c6c0' />
                        <FaO fontSize={'26px'} color='#f0b53d' />
                    </Flex>
                    <Button onClick={() => <Confetti/>} _hover={'none'} bg={'#263b46'} color={'gray.300'}>X TURN</Button>
                    <Button _hover={'none'} bg={'gray.300'}><GrPowerReset /></Button>
                </Flex>
                <Grid w={'70%'} m={'100px auto'} gap={'20px'} placeItems={'center'} gridTemplateColumns={'repeat(3, 1fr)'}>
                    <Box>X</Box>
                    <Box></Box>
                    <Box>X</Box>
                    <Box></Box>
                    <Box>O</Box>
                    <Box></Box>
                    <Box>O</Box>
                    <Box>X</Box>
                    <Box>O</Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default TicTacToe;