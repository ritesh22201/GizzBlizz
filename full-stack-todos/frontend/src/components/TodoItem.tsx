import { Box, Button, Checkbox, Flex, Heading, Input, Radio, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteTodo, editTodo, getTodos, updateStatus } from '../redux/todosReducer/action';
import { FaEdit, FaTrash, FaTrashAlt } from 'react-icons/fa';
// import {CiEdit} from 'react-icons/ci'

interface Todo {
    _id: string;
    title: string;
    status: boolean;
    created_at?: string;
}

const TodoItem = () => {

    const dispatch: Dispatch<any> = useDispatch();
    const value: string | null = localStorage.getItem('token');
    const token: { [key: string]: any } | null = value ? JSON.parse(value) : null;
    const { data, deletedMsg, isDeleted } = useSelector((store: any) => store.todoReducer);
    const [editInput, setEditInput] = useState<boolean[]>(Array(data.length).fill(false));
    const [title, setTitle] = useState<string>('');
    // const [modifiedData, setModifiedData] = useState<Todo[]>([]);
    const [originalData, setOriginalData] = useState<Todo[]>([]);
    const [toggle, setToggle] = useState(false);

    const toast = useToast();

    // let monthArr:string[] = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        setOriginalData(data);
    }, [data])

    useEffect(() => {
        if (token && token.token) {
            dispatch(getTodos(token.token));
        }

    }, [token?.token])

    const handleStatus = async (id: string) => {
        const todo = data.find((el: Todo) => el._id === id);
        if (todo) {
            const newStatus = !todo.status;
            await dispatch(editTodo(todo._id, '', newStatus));
        }

        await dispatch(getTodos(token?.token));
    }

    const handleDelete = async (id: string) => {
        await dispatch(deleteTodo(id));
        dispatch(getTodos(token?.token));
    }

    const handleEdit = async (e: React.FormEvent<HTMLFormElement>, id: string, i: number) => {
        e.preventDefault();

        await dispatch(editTodo(id, title, false));

        let updatedInput = [...editInput];
        updatedInput[i] = false;
        setEditInput(updatedInput);

        await dispatch(getTodos(token?.token));
    }

    useEffect(() => {
        if (isDeleted || deletedMsg) {
            toast({
                title: 'Success',
                description: deletedMsg,
                position: 'top',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        }
    }, [isDeleted, deletedMsg])

    const handlePendingTasks = () => {
        let updatedData = [...data];
        updatedData = updatedData.filter(el => el.status === false);
        setOriginalData(updatedData);
    }

    const handleCompletedTasks = () => {
        let updatedData = [...data];
        updatedData = updatedData.filter(el => el.status === true);
        setOriginalData(updatedData);
    }

    const handleAllTasks = () => {
        setOriginalData(data);
    }

    const handleTodaysTasks = () => {
        
    }

    return (
        <Box p={'10px 15px'} w={{ base: '100%', sm: '100%', md: '90%', lg: '60%', xl: '50%' }} m={'30px auto'}>

            <Flex transition={'ease-in'} transitionDuration={'1s'} justifyContent={'space-between'} alignItems={'center'}>
                <Button onClick={handleTodaysTasks} _hover={{ backgroundColor: '#041955', padding: '7px 12px', color: 'gray.200' }} color={'gray.600'} size={'md'}>TODAY'S</Button>
                <Button onClick={handleAllTasks} _hover={{ backgroundColor: '#041955', padding: '7px 12px', color: 'gray.200' }} color={'gray.600'} size={'md'}>ALL</Button>
                <Button onClick={handlePendingTasks} _hover={{ backgroundColor: '#041955', padding: '7px 12px', color: 'gray.200' }} color={'gray.600'} size={'md'}>PENDING</Button>
                <Button onClick={handleCompletedTasks} _hover={{ backgroundColor: '#041955', padding: '7px 12px', color: 'gray.200' }} color={'gray.600'} size={'md'}>COMPLETED</Button>
            </Flex>
            {originalData.length ? originalData.map((el: Todo, i: number) => {
                return <Flex bg={'#041955'} color={'gray.300'} p={'25px 10px'} borderRadius={'7px'} m={'30px 0'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' key={i} justifyContent={'space-between'} alignItems={'center'}>
                    <Flex alignItems={'center'} gap={'20px'}>
                        <Checkbox isChecked={el.status} onChange={() => handleStatus(el._id)} borderColor={'#eb06ff'} />
                        {editInput[i] ?
                            <form onSubmit={(e) => handleEdit(e, el._id, i)}>
                                <Input value={title} onChange={(e) => setTitle(e.target.value)} focusBorderColor='none' w={'90%'} type='text' placeholder='Edit todo....' />
                            </form>
                            :
                            <Text textDecoration={el.status ? 'line-through' : 'none'} textDecorationThickness={'3px'} textDecorationColor={'#ba1ec5'} fontWeight={'bold'}>{el.title}</Text>
                        }
                    </Flex>
                    <Text>{el.created_at?.split('T')[0]}</Text>
                    <Flex gap={'10px'}>
                        <Button onClick={() => {
                            let updatedInput = [...editInput];

                            const prevOpenedIndex = updatedInput.findIndex(opened => opened);
                            if (prevOpenedIndex !== -1) {
                                updatedInput[prevOpenedIndex] = false;
                            }

                            updatedInput[i] = !updatedInput[i];
                            setEditInput(updatedInput);
                            setTitle(el.title);

                        }} _hover={{ backgroundColor: '#237afe' }} borderRadius={'50%'} bg={'#237afe'} color={'gray.200'}>{<FaEdit />}</Button>
                        <Button onClick={() => handleDelete(el._id)} color={'gray.200'} fontSize={'25px'} w={'40px'} _hover={{ backgroundColor: '#e65b65' }} bg={'#e65b65'} borderRadius={'50%'}>{<FaTrash />}</Button>
                    </Flex>
                </Flex>
            }).reverse()
                :
                <Box pt={'30px'} display={'grid'} placeItems={'center'}>
                    <Heading size={'lg'} color={'gray.300'}>No todo found!!</Heading>
                </Box>
            }
        </Box>
    )
}

export default TodoItem;

