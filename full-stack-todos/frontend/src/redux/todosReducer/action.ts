import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { GET_TODOS, GET_TODOS_FAILURE, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS } from "./actionTypes"

interface NewTodo {
    title: string;
    created_at: number;
    priority: number;
    status: boolean;
}

const value: string | null = localStorage.getItem('token');
const token: { [key: string]: any } | null = value ? JSON.parse(value) : null;

export const getTodos = (token: string, q='', dateInp='') => (dispatch: any) => {

    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    dispatch({ type: GET_TODOS });
    return axios.get(`https://todoconfig.onrender.com/todo/?q=${q}`, config )
        .then(res => {
            dispatch({ type: GET_TODOS_SUCCESS, payload: res.data })
            // console.log(res)
        })
        .catch(err => {
            dispatch({ type: GET_TODOS_FAILURE, payload: err.message });
        })
}

export const postTodos = (newTodo: NewTodo) => (dispatch: any) => {

    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token?.token}`,
        },
    };

    dispatch({ type: GET_TODOS });
    return axios.post('https://todoconfig.onrender.com/todo/addTodo', newTodo, config)
        .then(res => {
            dispatch({ type: POST_TODOS_SUCCESS, payload: res.data })
            console.log(res)
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_TODOS_FAILURE, payload: err.message });
        })
}

export const updateStatus = (id:number) => (dispatch:any) => {
    
}

export const deleteTodo = (id:number) => (dispatch:any) => {
    
}