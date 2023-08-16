import { DELETE_TODOS_SUCCESS, GET_TODOS, GET_TODOS_FAILURE, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS } from "./actionTypes";

const initialState = {
    data : [],
    isLoading : false,
    isError : false,
    errorMsg : '',
    deletedMsg : '',
    isDeleted : false
}

type Action = {
    type : string;
    payload : string;
}

export const reducer = (state = initialState, {type, payload}:Action) => {
    switch(type){
        case GET_TODOS : {
            return {
                ...state,
                isLoading : true
            }
        }

        case GET_TODOS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                data : payload
            }
        }

        case GET_TODOS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                iError : true,
                errorMsg : payload
            }
        }

        case POST_TODOS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : [...state.data, payload]
            }
        }

        case DELETE_TODOS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                deletedMsg : payload,
                isDeleted : true
            }
        }

        default : {
            return state;
        }
    }
}