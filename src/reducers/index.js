import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import photosReducer from './photosReducers';
import usersReducer from './usersReducer';
import dependantsReducer from './dependantsReducer';

export default combineReducers({
    commentsReducer,
    photosReducer,
    usersReducer,
    dependantsReducer,
});