import axios from'axios';
import {
  PULL_COMMENTS, ERROR, CARGANDO, CAMBIO_TITULO, CAMBIO_CONTENIDO, AGREGADO, EDITADO
} from '../types/Commentypes';

export const pullComments = () => async (dispatch) => {
        dispatch({type: CARGANDO});
      
  try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');

      dispatch({
        type: PULL_COMMENTS,
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

  export const cambioInput = (caso, texto) => (dispatch) => {
    dispatch({
      type: caso,
      payload: texto
    });
  };

  export const agregar =(cuerpo) => async (dispatch) => {
        dispatch({type: CARGANDO});
        try{
           await axios.post(
            'https://jsonplaceholder.typicode.com/comments',
            cuerpo);
            window.Materialize.toast(
               'Comentario agregado exitosamente!', 
               2 * 1000
               );
          dispatch ({ type: AGREGADO })
        }
        catch (error) {
          window.Materialize.toast(
            'Adios, escribiste mal', 
            2 * 1000
            );
            dispatch({type: ERROR });
        }
  
  };

  export const traerUnComentario = (id) => async (dispatch) => {
    dispatch({type: CARGANDO});
      
  try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
        console.log(response);

        dispatch({
          type: CAMBIO_TITULO,
          payload: response.data.email
        });

        dispatch({
          type:CAMBIO_CONTENIDO,
          payload: response.data.body
        })
    }
    catch(error) {
        dispatch({
          type: ERROR,
          payload: error.message
        });

    }
  };

  export const editar =(cuerpo, id) => async (dispatch) => {
    dispatch({type: CARGANDO});
    try{
       await axios.put(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
        cuerpo);
        window.Materialize.toast(
           'Comentario editado exitosamente!', 
           2 * 1000
           );
      dispatch ({ type: EDITADO })
    }
    catch (error) {
      window.Materialize.toast(
        'Adios, editase mal', 
        2 * 1000
        );
        dispatch({type: ERROR });
    }

};

