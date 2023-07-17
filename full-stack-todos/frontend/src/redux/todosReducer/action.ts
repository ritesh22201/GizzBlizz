import axios from "axios";
import { GET_TODOS, GET_TODOS_FAILURE, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS } from "./actionTypes"

export const getTodos = (dateInput?:string) => (dispatch:any) =>{
    dispatch({type : GET_TODOS});
    return axios.get(`https://todoconfig.onrender.com/todo/`, )
    .then(res => {
        dispatch({type : GET_TODOS_SUCCESS, payload : res.data.reverse()})
    })
    .catch(err => {
        dispatch({type : GET_TODOS_FAILURE, payload : err.message});
    })
}

export const postTodos = (newTodo:any) => (dispatch:any) =>{
    dispatch({type : GET_TODOS});
    return axios.post('https://todoconfig.onrender.com/todo/addTodo', newTodo)
    .then(res => {
        dispatch({type : POST_TODOS_SUCCESS, payload : res.data})
        console.log(res)
    })
    .catch(err => {
        dispatch({type : GET_TODOS_FAILURE, payload : err.message});
    })
}