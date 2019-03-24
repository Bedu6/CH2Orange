import { GET, ERROR, LOADING, CHANGENAME, CHANGEFIRSTLASTNAME, CHANGESECONDLASTNAME, CHANGEAGE, USERCREATED, USERUPDATED, USERDELETED } from '../types/usersTypes';

const INITIAL_STATE = {
    loading: false,
    error: '',
    users: ['Funciona'],
    id: '',
    name: '',
    firstLastName: '',
    secondLastName: '',
    age: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET:
            return { ...state, users: action.payload, loading: false };

        case ERROR:
            return { ...state, error: action.payload, loading: false };

        case LOADING:
            return { ...state, loading: true };

        case CHANGENAME:
            return { ...state, name: action.payload, loading: false };

        case CHANGEFIRSTLASTNAME:
            return { ...state, firstLastName: action.payload, loading: false };

        case CHANGESECONDLASTNAME:
            return { ...state, secondLastName: action.payload, loading: false };

        case CHANGEAGE:
            return { ...state, age: action.payload, loading: false };

        case USERCREATED:
            return { ...state, users: [], name: '', firstLastName: '', secondLastName: '', age: 0, loading: false };

        case USERUPDATED:
            return { ...state, loading: false };

        case USERDELETED:
            return { ...state, users: [], loading: false };
            
        default:
            return state;
    }
}