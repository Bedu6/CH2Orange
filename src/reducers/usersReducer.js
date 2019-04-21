import * as usersTypes from '../types/usersTypes';

const INITIAL_STATE = {
    error: '',
    loading: false,
    users: [],
    id: '',
    name: '',
    firstLastName: '',
    secondLastName: '',
    age: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersTypes.ERROR:
            return { ...state, error: action.payload, loading: false };
        
        case usersTypes.LOADING:
			return { ...state, loading: true };
		
        case usersTypes.CREATEUSER:
            return { ...state, users: [], name: '', firstLastName: '', secondLastName: '', age: '', loading: false };
        
		case usersTypes.READUSERS:
			return { ...state, users: action.payload, loading: false };
		
		case usersTypes.UPDATEUSER:
			return { ...state, users: [], loading: false };
		
		case usersTypes.DELETEUSER:
			return { ...state, users: [], loading: false };
        
        case usersTypes.CHANGENAME:
            return { ...state, name: action.payload, loading: false };

        case usersTypes.CHANGEFIRSTLASTNAME:
            return { ...state, firstLastName: action.payload, loading: false };
        
        case usersTypes.CHANGESECONDLASTNAME:
            return { ...state, secondLastName: action.payload, loading: false };
        
        case usersTypes.CHANGEAGE:
            return { ...state, age: action.payload, loading: false };
        
        default:
            return state;
    }
}