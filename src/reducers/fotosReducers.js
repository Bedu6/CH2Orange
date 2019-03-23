import {
	TRAER_FOTOS, ERROR, CARGANDO
} from '../types/Fotostypes';

const INITIAL_STATE = {
	fotos: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_FOTOS:
			return { ...state, fotos: action.payload, cargando: false };
		case ERROR:
			return { ...state, error: action.payload, cargando: false };
		case CARGANDO:
			return { ...state, cargando: true };
		default: return state;
	}
};