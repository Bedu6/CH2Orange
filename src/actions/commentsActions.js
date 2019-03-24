import axios from 'axios';
import { LOADING, GET, ERROR, CHANGEEMAIL, CHANGECOMMENT, COMMENTADDED, COMMENTEDITED } from '../types/commentTypes';

export const getComments = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');

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

export const getComment = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${ id }`);

        dispatch({
            type: CHANGEEMAIL,
            payload: response.data.email
        });

        dispatch({
            type: CHANGECOMMENT,
            payload: response.data.body
        });
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
};

export const changeInput = (type, value) => (dispatch) => {
    dispatch({
        type: type,
        payload: value
    });
}

export const add = (comment) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        await axios.post('https://jsonplaceholder.typicode.com/comments', comment);

        window.Materialize.toast(
            'Comment Saved',
            3000
        );

        dispatch({
            type: COMMENTADDED
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

export const edit = (comment, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        await axios.put(`https://jsonplaceholder.typicode.com/comments/${ id }`, comment);

        window.Materialize.toast(
            'Comment Edited',
            3000
        );

        dispatch({
            type: COMMENTEDITED
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