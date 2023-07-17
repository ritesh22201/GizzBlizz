import axios from "axios";
import { Form } from "../../pages/Signup";
import { AUTH_REQ, REGISTER_FAILURE, REGISTER_SUCCESS } from "./actionTypes";

export const signup = (formData: Form) => (dispatch: any) => {
    dispatch({ type: AUTH_REQ });
    axios.post('https://todoconfig.onrender.com/users/register', formData)
        .then(res => {
            // console.log(res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.msg });
        })
        .catch(err => {
            // console.log(err.response.data.msg)
            dispatch({ type: REGISTER_FAILURE, payload: err.response.data.msg });
        })
}