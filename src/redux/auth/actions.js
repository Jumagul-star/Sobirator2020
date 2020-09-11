import { 
    LOGIN_USER, 
    LOGIN_USER_FAILED, 
    LOGIN_USER_SUCCESS, 
    REGISTER_USER, 
    REGISTER_USER_FAILED, 
    REGISTER_USER_SUCCESS 
} from "./constants"
import Axios from "axios";


//? LOGIN
export const loginUser = ({email, password}, history) => (dispatch) => {
    dispatch(
        {
            type: LOGIN_USER
        }
    );

    Axios.post(process.env.REACT_APP_API_URL + '/api/auth/login', {
        email,
        password
    })
    .then(({data: {token}}) => {
        dispatch(loginUserSuccess(token,history))
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_USER_FAILED,
            payload: err
        })
    })
}

const loginUserSuccess = (token, history) => {
    localStorage.setItem('token', token);
    history.replace('/application');
    return ({
        type: LOGIN_USER_SUCCESS
    })
}



//? REGISTER
export const regUser = ({email, password}, history) => (dispatch) => {
    dispatch(
        {
            type: REGISTER_USER,
        }
    );

    Axios.post(process.env.REACT_APP_API_URL + '/api/auth/register', {
        email,
        password
    })
    .then(() => {
        dispatch(regUserSuccess(history))
    })
    .catch((err) => {
        dispatch({
            type: REGISTER_USER_FAILED,
            payload: err
        })
    })
}

const regUserSuccess = (history) => {
    history.replace('/auth/login');
    return ({
        type: REGISTER_USER_SUCCESS,
    })
}