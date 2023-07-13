import { Box } from '@chakra-ui/react';
import React from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todos = () => {
  return (
    <Box>
        <TodoInput/>
        <TodoItem/>
    </Box>
  )
}

export default Todos;