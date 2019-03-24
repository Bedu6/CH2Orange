import axios from 'axios';
import {
	TRAER_FOTOS, ERROR_FOTOS, CARGANDO_FOTOS
} from '../types/comentariosTypes';

export const traerFotos = () => async (dispatch) => {
	dispatch({ type: CARGANDO_FOTOS });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
				{/*const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');*/}

		dispatch({
			type: TRAER_FOTOS,
			payload: response.data
		});
	}
	catch(error) {
		dispatch({
		type: ERROR_FOTOS,
		payload: error.message
		});
	}
};