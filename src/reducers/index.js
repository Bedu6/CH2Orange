import { combineReducers } from 'redux';
import dependentsReducer from './dependentsReducer';
import usersReducer from './usersReducer';

export default combineReducers({

    usersReducer,
    dependentsReducer
});