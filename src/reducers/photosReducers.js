import { LOADING, GET, ERROR } from '../types/photosTypes';

const INITIAL_STATE = {
    photos: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case GET:
            return { ...state, photos: action.payload, loading: false };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}