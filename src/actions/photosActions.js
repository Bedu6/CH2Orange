import axios from 'axios';
import { LOADING, GET, ERROR } from '../types/photosTypes';

export const getPhotos = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');

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