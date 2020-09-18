import { 
    ADD_NEW_APPLICATION, 
    FETCH_DATA, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILED, 
    DELETE_APPLICATION, EDIT_APPLICATION 
} from "./constants";
import Axios from "axios";

const url = 'http://localhost:8000';

export const fetchData = () => (dispatch) => {
    dispatch({
        type: FETCH_DATA
    });
    Axios.get(`${url}/posts?admin=false`)
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

export const deleteApplication = (id) => (
    {
        type: DELETE_APPLICATION,
        payload: id
    }
)

export const editApplication = (data) => (
    {
        type: EDIT_APPLICATION,
        payload: data
    }
)