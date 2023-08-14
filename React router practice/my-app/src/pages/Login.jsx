import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { isAuth } = useContext(AuthContext);
    const toast = useToast();
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin(formDetails);

    }


    const handleLogin = (formDetail) => {
        axios.post('https://reqres.in/api/login', formDetail)
            .then(res => {
                localStorage.setItem('pr-token', JSON.stringify(res.data.token));
                if (res.data.token) {
                    toast({
                        title: 'Success',
                        description: "Login Successful",
                        status: 'success',
                        duration: 4000,
                        position: 'top',
                        isClosable: true,
                    })
   
                    setTimeout(() => {
                        navigate('/products');
                        window.location.reload();
                    }, 4000)
                }
            })
            .catch(err => {
                if (err.message) {
                    toast({
                        title: 'Failed',
                        description: err.message,
                        status: 'error',
                        duration: 4000,
                        position: 'top',
                        isClosable: true,
                    })
                }
            })
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" name='email' value={formDetails.email} onChange={(e) => handleChange(e)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" name='password' value={formDetails.password} onChange={(e) => handleChange(e)} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                </Stack>
                                <Button
                                    type='submit'
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    )
}