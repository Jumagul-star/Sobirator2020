import { ADD_NEW_APPLICATION, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./constants";
import Axios from "axios";

const url = 'http://localhost:8000';

export const fetchData = () => (dispatch) => {
    dispatch({
        type: FETCH_DATA
    });
    Axios.get(`${url}/posts`)
        .then((resp)=> {
            const {data} = resp;
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: data
            })
        })
        .catch((e)=> {
            dispatch({
                type: FETCH_DATA_FAILED,
                payload: e
            })
        })
}

export const addNewApplication = (newApplication) => (
    {
        type: ADD_NEW_APPLICATION,
        payload: newApplication
    }
)