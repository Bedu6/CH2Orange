import { combineReducers } from 'redux';
import commentsReducers from './commentsReducers';
import fotosReducers from './fotosReducers';


export default combineReducers({
  commentsReducers,
  fotosReducers
});