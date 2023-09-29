import { GET_MOVIES_FAILURE, GET_MOVIES_REQ, GET_MOVIES_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    movies: []
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_MOVIES_REQ: {
            return {
                ...state, 
                isLoading : true,
                isError : false
            }
        }

        case GET_MOVIES_SUCCESS : {
            return {
                ...state,
                data : payload
            }
        }

        case GET_MOVIES_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        default: {
            return state;
        }
    }
}