import { GET, ERROR, LOADING, CHANGENAME, CHANGEFIRSTLASTNAME, CHANGESECONDLASTNAME, CHANGEAGE, USERCREATED, USERUPDATED, USERDELETED } from '../types/usersTypes';

const INITIAL_STATE = {
    loading: false,
    error: '',
    usuarios: [],
    id: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    edad: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET:
            return { ...state, usuarios: action.payload, loading: false };

        case ERROR:
            return { ...state, error: action.payload, loading: false };

        case LOADING:
            return { ...state, loading: true };

        case CHANGENAME:
            return { ...state, nombre: action.payload, loading: false };

        case CHANGEFIRSTLASTNAME:
            return { ...state, apellido_paterno: action.payload, loading: false };

        case CHANGESECONDLASTNAME:
            return { ...state, apellido_materno: action.payload, loading: false };

        case CHANGEAGE:
            return { ...state, edad: action.payload, loading: false };

        case USERCREATED:
            return { ...state, usuarios: [], nombre: '', apellido_paterno: '', apellido_materno: '', edad: 0, loading: false };

        case USERUPDATED:
            return { ...state, loading: false, usuarios: []};

        case USERDELETED:
            return { ...state, users: [], loading: false };
            
        default:
            return state;
    }
}