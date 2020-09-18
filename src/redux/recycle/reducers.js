
import { 
    ADD_NEW_APPLICATION, 
    FETCH_DATA, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILED, DELETE_APPLICATION, EDIT_APPLICATION 
} from './constants';

const INIT_STATE = {
    applications: [],
    loading: false,
    err: null,
    data: [],
}

const RecycleReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {...state, loading: true};
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, err: null, data: action.payload};
        case FETCH_DATA_FAILED:
            return {...state, loading: false, err: action.payload}
        case ADD_NEW_APPLICATION:
            return {...state, applications: [...state.applications, action.payload]}
        case DELETE_APPLICATION:
            return {...state, applications: state.applications.filter(
                item => item.id === action.payload.id ? action.payload : item
            )}
        case EDIT_APPLICATION:
            return {...state, applications: state.applications.map(
                item => item.id === action.payload.id ? action.payload : item
            )}
        default:
            return state
    }
}

export default RecycleReducer;