import { LOADING, GET, ERROR, CHANGEEMAIL, CHANGECOMMENT, COMMENTADDED, COMMENTEDITED } from '../types/commentTypes';

const INITIAL_STATE = {
    comments: [],
    loading: false,
    error: '',
    email: '',
    body: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case GET:
            return { ...state, comments: action.payload, loading: false };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        case CHANGEEMAIL:
            return { ...state, email: action.payload, loading: false };
        case CHANGECOMMENT:
            return { ...state, body: action.payload, loading: false };
        case COMMENTADDED:
            return { ...state, comments: [], email: '', body: '', loading: false };
        case COMMENTEDITED:
            return { ...state, loading: false };
        default:
            return state;
    }
}