import axios from 'axios';
import { GETDEPENDENTS, GET, ERROR, LOADING, CHANGENAME, CHANGEFIRSTLASTNAME, CHANGERELATION,
  CHANGESECONDLASTNAME, CHANGEAGE, USERCREATED, USERUPDATED, USERDELETED, USER_ID } from '../types/dependentsTypes.js';

export const getDependents = (id) => async (dispatch) => {

	dispatch({ type: LOADING });

	try{
		///api/dependientes_usuario/nombre_equipo/usuario_id
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${id}`);

		dispatch({
			type: GETDEPENDENTS,
			payload: response.data
		});
	}
	catch(error){
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};

export const changeInput = (caso, text) => (dispatch) => {
	dispatch({
		type: caso,
		payload: text
	});
};


export const createUser = (id) => async (dispatch) => {
	dispatch({ type: LOADING });

	try{
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${id}`);

		dispatch({
			type: CHANGENAME,
			payload: `${response.data[0].nombre} ${response.data[0].apellidos.paterno} ${response.data[0].apellidos.materno}`
		});
	}
	catch(error){

		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};


export const addUser = (dependent) => async (dispatch) => {

	console.log(dependent);

	dispatch({ type: LOADING });	
	
	try{
		await axios.post('https://g6-ch2.herokuapp.com/api/dependientes/orange', dependent);		

		dispatch({
			type: USERCREATED
		});

		console.log(4);

		window.Materialize.toast(
			'Guardado exitosamente', 
			1300
		);		
	}
	catch(error){
			
		window.Materialize.toast(
			'Problemas al guardar el dependiente', 
			2000
		);
		dispatch({ type: ERROR });
	}

};

export const getOneDependent = (id) => async (dispatch) => {
	dispatch({ type: LOADING });

	try{
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${id}`);

		console.log(response);

		dispatch({
			type: CHANGENAME,
			payload: response.data[0].nombre_completo
		});

		dispatch({
			type: CHANGERELATION,
			payload: response.data[0].dependencia
		});

		dispatch({
			type: CHANGEAGE,
			payload: response.data[0].edad
		});
	}
	catch(error){
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};

