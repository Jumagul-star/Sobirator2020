import {combineReducers} from 'redux';
import AuthReducer from './auth/reducers';
import RecycleReducer from './recycle/reducers';


export default combineReducers(
    {
        AuthReducer,
        RecycleReducer,
        
    }
)