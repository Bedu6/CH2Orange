import axios from 'axios';
import { GET, ERROR, LOADING, CHANGENAME, CHANGEDEPENDENCY, CHANGEAGE, DEPENDANTCREATED, DEPENDANTUPDATED, DEPENDANTDELETED } from '../types/dependantsTypes';

export const changeInput = (type, value) => (dispatch) => {
    dispatch({
        type: type,
        payload: value
    });
};

export const getDependants = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get('https://g6-ch2.herokuapp.com/api/dependientes/orange');

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

export const getDependant = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${ id }`);

        dispatch({
            type: CHANGENAME,
            payload: response.data[0].nombre_completo
        });

        dispatch({
            type: CHANGEDEPENDENCY,
            payload: response.data[0].dependencia
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

export const createDependant = (dependant) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.post('https://g6-ch2.herokuapp.com/api/dependientes/orange', dependant);

        window.Materialize.toast(
            'Usuario Creado Exitosamente',
            3000
        );

        dispatch({
            type: DEPENDANTCREATED
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

export const updateDependant = (dependant, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.post(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${ id }`, dependant);

        window.Materialize.toast(
            'Usuario Actualizado Exitosamente',
            3000
        );

        dispatch({
            type: DEPENDANTUPDATED
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

export const deleteDependant = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        await axios.delete(`https://g6-ch2.herokuapp.com/api/dependientes/orange/${ id }`);

        window.Materialize.toast(
            'El dependiente esta muerto, o sea estiró la pata o chupó faros, colgó los tenis o se lo cargó el payaso en otras palabras, hay ya me aburrí de escribir más frases similares, consulta San Google, vales mil, besos, bye...',
            3000            
        );

        dispatch({
            type: DEPENDANTDELETED
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