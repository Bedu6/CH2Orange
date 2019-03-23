import { combineReducers } from 'redux';
import comentariosReducer from './comentariosReducer.js';
import fotosReducer from './fotosReducer.js'

export default combineReducers({
	comentariosReducer,
	fotosReducer
});