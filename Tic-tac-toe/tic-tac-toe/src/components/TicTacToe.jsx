import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { FaO, FaXmark } from 'react-icons/fa6';
import { GrPowerReset } from 'react-icons/gr';
import Confetti from './Confetti';
import '../styles/tictactoe.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [currentPlayerText, setCurrentPlayerText] = useState(true);

    let outcomeArr = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]
    ]

    const handleInput = (e = '',n) => {
        if (board[n] !== '') {
            return;
        }
        
        if(board[n] === outcomeArr[n])

        board[n] = currentPlayerText ? 'X' : 'O';
        setCurrentPlayerText(!currentPlayerText);

        if(board[n] === 'X'){
            e.target.style.color = '#37c6c0'
        }
        else{
            e.target.style.color = '#f0b53d' 
        }
    }

    const handleReset = () => {
        let resetBoard = new Array(9).fill('');
        setBoard(resetBoard);
    }

    return (
        <Box bg={'#203138'} h={'100vh'}>
            <Box w={'46%'} m={'auto'} p={'20px'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} fontWeight={'bold'} color={'white'}>
                        <FaXmark fontSize={'32px'} color='#37c6c0' />
                        <FaO fontSize={'26px'} color='#f0b53d' />
                    </Flex>
                    <Button onClick={() => <Confetti />} _hover={'none'} bg={'#263b46'} color={'gray.300'}>{currentPlayerText ? 'X' : 'O'} TURN</Button>
                    <Button _hover={'none'} bg={'gray.300'} onClick={handleReset}><GrPowerReset /></Button>
                </Flex>
                <Grid className='gridBox' w={'50%'} m={'100px auto'} gap={'20px'} placeItems={'center'} gridTemplateColumns={'repeat(3, 1fr)'}>
                    <Box onClick={(e) => handleInput(e,0)}>{board[0]}</Box>
                    <Box onClick={(e) => handleInput(e,1)}>{board[1]}</Box>
                    <Box onClick={(e) => handleInput(e,2)}>{board[2]}</Box>
                    <Box onClick={(e) => handleInput(e,3)}>{board[3]}</Box>
                    <Box onClick={(e) => handleInput(e,4)}>{board[4]}</Box>
                    <Box onClick={(e) => handleInput(e,5)}>{board[5]}</Box>
                    <Box onClick={(e) => handleInput(e,6)}>{board[6]}</Box>
                    <Box onClick={(e) => handleInput(e,7)}>{board[7]}</Box>
                    <Box onClick={(e) => handleInput(e,8)}>{board[8]}</Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default TicTacToe;