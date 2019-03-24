import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import photosReducer from './photosReducers';

export default combineReducers({
    commentsReducer,
    photosReducer
});