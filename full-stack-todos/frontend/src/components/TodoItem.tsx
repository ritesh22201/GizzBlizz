import { Box } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';
import { getTodos } from '../redux/todosReducer/action';

const TodoItem = () => {
    const dispatch:Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [])
    
    return (
        <Box>

        </Box>
    )
}

export default TodoItem