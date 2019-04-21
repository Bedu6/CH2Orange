import axios from 'axios';
import * as usersTypes from '../types/usersTypes';

export const changeInput = (type, value) => (dispatch) => {
    dispatch({
        type: type,
        payload: value
    });
};

export const createUser = (user) => async (dispatch) => {
    dispatch({
        type: usersTypes.LOADING
    });

    try {
        await axios.post('https://g6-ch2.herokuapp.com/api/usuarios/orange', user);

        window.Materialize.toast(
            'Usuario Creado Exitosamente',
            3000
        );

        dispatch({
            type: usersTypes.CREATEUSER
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: usersTypes.ERROR
        });
    }
}

export const readUsers = () => async (dispatch) => {
    dispatch({
        type: usersTypes.LOADING
    });

    try {
        const response = await axios.get('https://g6-ch2.herokuapp.com/api/usuarios/orange');

        dispatch({
            type: usersTypes.READUSERS,
            payload: response.data
        });
    }
    catch (error) {
        dispatch({
            type: usersTypes.ERROR,
            payload: error.message
        });
    }
};

export const readUser = (id) => async (dispatch) => {
    dispatch({
        type: usersTypes.LOADING
    });

    try {
        const response = await axios.get(`https://g6-ch2.herokuapp.com/api/usuarios/orange/${ id }`);

        dispatch({
            type: usersTypes.CHANGENAME,
            payload: response.data[0].nombre
        });

        dispatch({
            type: usersTypes.CHANGEFIRSTLASTNAME,
            payload: response.data[0].apellidos.paterno
        });

        dispatch({
            type: usersTypes.CHANGESECONDLASTNAME,
            payload: response.data[0].apellidos.materno
        });

        dispatch({
            type: usersTypes.CHANGEAGE,
            payload: response.data[0].edad.toString()
        });
    }
    catch (error) {
        dispatch({
            type: usersTypes.ERROR,
            payload: error.message
        });
    }
}

export const updateUser = (user, id) => async (dispatch) => {
    dispatch({
        type: usersTypes.LOADING
    });

    try {
        await axios.post(`https://g6-ch2.herokuapp.com/api/usuarios/orange/${ id }`, user);

        window.Materialize.toast(
            'Usuario Actualizado Exitosamente',
            3000
        );

        dispatch({
            type: usersTypes.UPDATEUSER
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: usersTypes.ERROR
        });
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({
        type: usersTypes.LOADING
    });

    try {
        await axios.delete(`https://g6-ch2.herokuapp.com/api/usuarios/orange/${ id }`);

        dispatch({
            type: usersTypes.DELETEUSER
        });

        const response = await axios.get('https://g6-ch2.herokuapp.com/api/usuarios/orange');

        window.Materialize.toast(
            'Usuario Eliminado Exitosamente',
            3000            
        );

        dispatch({
            type: usersTypes.READUSERS,
            payload: response.data
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: usersTypes.ERROR
        });
    }
}