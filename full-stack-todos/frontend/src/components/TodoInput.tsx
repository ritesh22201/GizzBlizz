import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React, {useState} from 'react'
import { FaPlus } from 'react-icons/fa';
import { postTodos } from '../redux/todosReducer/action';
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';

const TodoInput = () => {
    const [todo, setTodo] = useState<string>('');
    const dispatch:Dispatch<any> = useDispatch();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        const newTodo = {
            title : todo,
            created_at : Date.now(),
            priority : Math.ceil(Math.random()*10),
            status : false
        }

        dispatch(postTodos(newTodo));
        setTodo('');
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Flex w={{ base: '90%', sm: '90%', md: '90%', lg: '60%', xl: '50%' }} m={'auto'} alignItems={'center'} gap={'20px'}>
                    <Input value={todo} onChange={(e) => setTodo(e.target.value)} focusBorderColor='none' border={'none'} borderBottom={'1px inset'} color={'gray.300'} m={'20px 0'} type='text' placeholder='Add a todo...' />
                    <Button type='submit' w={'50px'} h={'45px'} id='addBtn' borderRadius={'50%'} bg={'#041955'} color={'gray.300'}>{<FaPlus />}</Button>
                </Flex>
            </form>
        </Box>
    )
}

export default TodoInput;