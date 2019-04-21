import * as dependentsTypes from '../types/dependentsTypes';

const INITIAL_STATE = {
    error: '',
    loading: false,
    dependents: [],
    id: '',
    userId: '',
    fullName: '',
    age: '',
    dependenceType: '',
    routeFlag: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dependentsTypes.ERROR:
            return { ...state, error: action.payload, loading: false };
        
        case dependentsTypes.LOADING:
			return { ...state, loading: true };
		
        case dependentsTypes.CREATEDEPENDENT:
            return { ...state, dependents: [], fullName: '', age: '', dependenceType: '', loading: false };
        
		case dependentsTypes.READDEPENDENTS:
            return { ...state, dependents: action.payload, loading: false };
		
		case dependentsTypes.UPDATEDEPENDENT:
			return { ...state, dependents: [], loading: false };
		
		case dependentsTypes.DELETEDEPENDENT:
			return { ...state, dependents: [] };
        
        case dependentsTypes.CHANGEFULLNAME:
            return { ...state, fullName: action.payload, loading: false };

        case dependentsTypes.CHANGEAGE:
            return { ...state, age: action.payload, loading: false };
        
        case dependentsTypes.CHANGEDEPENDENCETYPE:
            return { ...state, dependenceType: action.payload, loading: false };
        
        case dependentsTypes.CHANGEROUTEFLAG:
            return { ...state, routeFlag: action.payload };
        
        default:
            return state;
    }
}