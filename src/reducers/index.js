import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import photosReducer from './photosReducers';
import usersReducer from './usersReducer';

export default combineReducers({
    commentsReducer,
    photosReducer,
    usersReducer,
});