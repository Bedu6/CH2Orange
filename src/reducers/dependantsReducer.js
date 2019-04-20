import { GET, ERROR, LOADING, CHANGENAME, CHANGEDEPENDENCY, CHANGEAGE, DEPENDANTCREATED, DEPENDANTUPDATED, DEPENDANTDELETED } from '../types/dependantsTypes';

const INITIAL_STATE = {
    loading: false,
    error: '',
    dependants: [],
    id: '',
    name: '',
    age: '',
    parent: '',
    dependency: ''
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET:
            return { ...state, dependants: action.payload, loading: false };

        case ERROR:
            return { ...state, error: action.payload, loading: false };

        case LOADING:
            return { ...state, loading: true };

        case CHANGENAME:
            return { ...state, name: action.payload, loading: false };

        case CHANGEDEPENDENCY:
            return { ...state, dependency: action.payload, loading: false };

        case CHANGEAGE:
            return { ...state, age: action.payload, loading: false };

        case DEPENDANTCREATED:
            return { ...state, dependants: [], name: '', age: 0, parent: '', dependency: '',  loading: false };

        case DEPENDANTUPDATED:
            return { ...state, loading: false };

        case DEPENDANTDELETED:
            return { ...state, dependants: [], loading: false };
            
        default:
            return state;
    }
}