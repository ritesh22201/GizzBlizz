import { Box } from '@chakra-ui/react';
import React from 'react'
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import { useSelector } from 'react-redux';

const Home = () => {
  const auth = JSON.parse(localStorage.getItem('isAuth') || 'false');
  return (
    <Box h={'100vh'}>
      {auth && <TodoInput />}
      {auth && <TodoItem />}
    </Box>
  )
}

export default Home;