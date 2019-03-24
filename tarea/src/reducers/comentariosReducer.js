import {
	TRAER_COMENTARIOS, ERROR_COMENTARIOS, CARGANDO_COMENTARIOS, CAMBIO_TITULO, CAMBIO_CONTENIDO, AGREGADO, EDITADO
} from '../types/comentariosTypes';

const INITIAL_STATE = {
	comentarios: [],
	cargando: false,
	error: '',
	titulo: '',
	contenido: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case TRAER_COMENTARIOS:
			return { ...state, comentarios: action.payload, cargando: false };

		case ERROR_COMENTARIOS:
			return { ...state, error: action.payload, cargando: false };	

		case CARGANDO_COMENTARIOS:
			return { ...state, cargando: true };

		case CAMBIO_TITULO:	
			return { ...state, titulo: action.payload, cargando: false };

		case CAMBIO_CONTENIDO:	
			return { ...state, contenido: action.payload, cargando: false };

		case AGREGADO:	
			return { ...state, titulo: '', contenido: '', cargando: false, comentarios: [] };

		case EDITADO:	
			return { ...state, cargando: false, comentarios: [] };



		default: return state;
	}
}