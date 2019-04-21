import axios from 'axios';
import * as dependentsTypes from '../types/dependentsTypes';

export const changeInput = (type, value) => (dispatch) => {
    dispatch({
        type: type,
        payload: value
    });
};

export const createDependent = (dependent) => async (dispatch) => {
    dispatch({
        type: dependentsTypes.LOADING
    });

    try {
        await axios.post('https://g6-ch2.herokuapp.com/api/dependientes/orange', dependent);

        window.Materialize.toast(
            'Dependiente Creado Exitosamente',
            3000
        );

        dispatch({
            type: dependentsTypes.CREATEDEPENDENT
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: dependentsTypes.ERROR
        });
    }
}

export const readDependents = () => async (dispatch) => {
    dispatch({
        type: dependentsTypes.LOADING
    });

    try {
        const response = await axios.get('https://g6-ch2.herokuapp.com/api/dependientes/orange');

        dispatch({
            type: dependentsTypes.READDEPENDENTS,
            payload: response.data
        });

        dispatch({
            type: dependentsTypes.CHANGEROUTEFLAG,
            payload: false
        });
    }
    catch (error) {
        dispatch({
            type: dependentsTypes.ERROR,
            payload: error.message
        });
    }
};

export const readUserDependents = (id) => async (dispatch) => {
    dispatch({
        type: dependentsTypes.LOADING
    });

    try {
        const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes_usuario/orange/${ id }`);
        
        dispatch({
            type: dependentsTypes.READDEPENDENTS,
            payload: response.data
        });

        dispatch({
            type: dependentsTypes.CHANGEROUTEFLAG,
            payload: true
        });
    }
    catch (error) {
        dispatch({
            type: dependentsTypes.ERROR,
            payload: error.message
        });
    }
};

export const readDependent = (id) => async (dispatch) => {
    dispatch({
        type: dependentsTypes.LOADING
    });

    try {
        const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${ id }`);

        dispatch({
            type: dependentsTypes.CHANGEFULLNAME,
            payload: response.data[0].nombre_completo
        });

        dispatch({
            type: dependentsTypes.CHANGEAGE,
            payload: response.data[0].edad.toString()
        });

        dispatch({
            type: dependentsTypes.CHANGEDEPENDENCETYPE,
            payload: response.data[0].dependencia
        });
    }
    catch (error) {
        dispatch({
            type: dependentsTypes.ERROR,
            payload: error.message
        });
    }
}

export const updateDependent = (dependent, id) => async (dispatch) => {
    dispatch({
        type: dependentsTypes.LOADING
    });

    try {
        await axios.post(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${ id }`, dependent);

        window.Materialize.toast(
            'Dependiente Actualizado Exitosamente',
            3000
        );

        dispatch({
            type: dependentsTypes.UPDATEDEPENDENT
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: dependentsTypes.ERROR
        });
    }
}

export const deleteDependent = (dependentId, userId, routeFlag) => async (dispatch) => {
    dispatch({
        type: dependentsTypes.LOADING
    });

    try {
        await axios.delete(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${ dependentId }`);

        dispatch({
            type: dependentsTypes.DELETEDEPENDENT
        });

        let url = "";

        if (routeFlag) {
            url = `https://g6-ch2.herokuapp.com/api/dependientes_usuario/orange/${ userId }`
        }
        else {
            url = "https://g6-ch2.herokuapp.com/api/dependientes/orange"
        }

        const response = await axios.get(url);

        window.Materialize.toast(
            'Dependiente Eliminado Exitosamente',
            3000            
        );

        dispatch({
            type: dependentsTypes.READDEPENDENTS,
            payload: response.data
        });
    }
    catch (error) {
        window.Materialize.toast(
            error.message,
            3000
        );

        dispatch({
            type: dependentsTypes.ERROR
        });
    }
}