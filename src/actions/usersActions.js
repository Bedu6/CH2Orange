import axios from 'axios';
import { GET, ERROR, LOADING, CHANGENAME, CHANGEFIRSTLASTNAME, CHANGESECONDLASTNAME, CHANGEAGE, USERCREATED, USERUPDATED, USERDELETED } from '../types/usersTypes';

export const changeInput = (type, value) => (dispatch) => {
    dispatch({
        type: type,
        payload: value
    });
};

export const getUsers = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get('https://g6-ch2.herokuapp.com/api/usuarios/orange');

        dispatch({
            type: GET,
            payload: response.data
        });
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
};

export const getUser = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get(`https://g6-ch2.herokuapp.com/api/usuarios/orange/${ id }`);

        dispatch({
            type: CHANGEFIRSTLASTNAME,
            payload: response.data[0].apellidos.paterno
        });

        dispatch({
            type: CHANGESECONDLASTNAME,
            payload: response.data[0].apellidos.materno
        });

        dispatch({
            type: CHANGENAME,
            payload: response.data[0].nombre
        });

        dispatch({
            type: CHANGEAGE,
            payload: response.data[0].edad
        });
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
};

export const createUser = (user) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.post('https://g6-ch2.herokuapp.com/api/usuarios/orange', user);

        window.Materialize.toast(
            'Usuario Creado Exitosamente',
            3000
        );

        dispatch({
            type: USERCREATED
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: ERROR
        });
    }
}

export const updateUser = (user, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.post(`https://g6-ch2.herokuapp.com/api/usuarios/orange/${ id }`, user);

        window.Materialize.toast(
            'Usuario Actualizado Exitosamente',
            3000
        );

        dispatch({
            type: USERUPDATED
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: ERROR
        });
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        await axios.delete(`https://g6-ch2.herokuapp.com/api/usuarios/orange/${ id }`);

        window.Materialize.toast(
            'El usuario esta muerto, o sea estiró la pata o chupó faros, colgó los tenis o se lo cargó el payaso en otras palabras, hay ya me aburrí de escribir más frases similares, consulta San Google, vales mil, besos, bye...',
            3000            
        );

        dispatch({
            type: USERDELETED
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: ERROR
        });
    }
}