import { AUTH_REQ, REGISTER_FAILURE, REGISTER_SUCCESS } from "./actionTypes";

let initialState = {
    isAuth : false,
    isError : '',
    isLoading : false,
    isRegistered : '',
    token : ''
}

type Action = {
    type : string;
    payload : string | number;
}

export const reducer = (state = initialState, {type, payload}:Action) => {
    switch(type){
        case AUTH_REQ : {
            return {
                ...state,
                isLoading : true,
                isError : ''
            }
        }

        case REGISTER_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : '',
                isRegistered : payload
            }
        }

        case REGISTER_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : payload,
                isRegistered : ''
            }
        }
        
        default : {
            return state;
        }
    }
}