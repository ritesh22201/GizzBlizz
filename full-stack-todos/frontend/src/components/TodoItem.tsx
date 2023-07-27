import { Box, Button, Checkbox, Flex, Heading, Input, Radio, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getTodos } from '../redux/todosReducer/action';
import { FaEdit, FaTrash, FaTrashAlt } from 'react-icons/fa';
// import {CiEdit} from 'react-icons/ci'

const TodoItem = () => {
    const [editInput, setEditInput] = useState<boolean>(false);
    const dispatch: Dispatch<any> = useDispatch();
    const value: string | null = localStorage.getItem('token');
    const token: { [key: string]: any } | null = value ? JSON.parse(value) : null;
    const { data } = useSelector((store: any) => store.todoReducer);

    let monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        if(token && token.token){
            dispatch(getTodos(token.token));
        }
    }, [token?.token])

    return (
        <Box p={'10px 15px'} w={{ base: '100%', sm: '100%', md: '90%', lg: '60%', xl: '50%' }} m={'30px auto'}>
            <Heading color={'gray.300'} size={'md'}>TODAY'S TASKS</Heading>
            {data.map((el: any, i: number) => {
                return <Flex bg={'#041955'} color={'gray.300'} p={'25px 10px'} borderRadius={'7px'} m={'30px 0'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' key={i} justifyContent={'space-between'} alignItems={'center'}>
                    <Flex alignItems={'center'} gap={'20px'}>
                        <Checkbox borderColor={'#eb06ff'} />
                        {editInput ?
                            <form>
                                <Input value={el.title} focusBorderColor='none' w={'90%'} type='text' placeholder='Edit todo....' />
                            </form>
                            :
                            <Text fontWeight={'bold'}>{el.title}</Text>
                        }
                    </Flex>
                    <Text>{el.created_at.split('T')[0]}</Text>
                    <Flex gap={'10px'}>
                        <Button onClick={() => setEditInput(true)} _hover={{ backgroundColor: '#237afe' }} borderRadius={'50%'} bg={'#237afe'} color={'gray.200'}>{<FaEdit />}</Button>
                        <Button color={'gray.200'} fontSize={'25px'} w={'40px'} _hover={{ backgroundColor: '#e65b65' }} bg={'#e65b65'} borderRadius={'50%'}>{<FaTrash />}</Button>
                    </Flex>
                </Flex>
            })}
        </Box>
    )
}

export default TodoItem;