import { GET_MOVIES_FAILURE, GET_MOVIES_REQ, GET_MOVIES_SUCCESS } from "./actionTypes"
import axios from 'axios';

export const getMovies = (val = 'Avengers') => (dispatch) => {
    dispatch({type : GET_MOVIES_REQ});
    axios.get(`http://www.omdbapi.com/?s=${val}&apikey=b2462136`)
    .then(res => {
        console.log(res)
        dispatch({type : GET_MOVIES_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_MOVIES_FAILURE})
    })
}