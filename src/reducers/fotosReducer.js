import {
	TRAER_FOTOS, ERROR_FOTOS, CARGANDO_FOTOS
} from '../types/comentariosTypes';

const INITIAL_STATE = {
	fotos: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case TRAER_FOTOS:
			return { ...state, fotos: action.payload, cargando: false };

		case ERROR_FOTOS:
			return { ...state, error: action.payload, cargando: false };	

		case CARGANDO_FOTOS:
			return { ...state, cargando: true };	

		default: return state;
	}
}