import axios from 'axios';
import {
	TRAER_FOTOS, ERROR, CARGANDO
} from '../types/Fotostypes';

export const traerFotos = () => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
		
		dispatch({
			type: TRAER_FOTOS,
			payload: response.data
		});
	}
	catch(error) {
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};