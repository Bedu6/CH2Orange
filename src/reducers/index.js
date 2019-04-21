import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import dependentsReducer from "./dependentsReducer";

export default combineReducers({
    usersReducer,
    dependentsReducer
});