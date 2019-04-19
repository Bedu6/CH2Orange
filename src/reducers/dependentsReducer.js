import { GETDEPENDENTS, ERROR, LOADER, CHANGENAME, CHANGERELATION, 
  CHANGEAGE, USERCREATED, EDITED, USER_ID } from '../types/dependentsTypes.js';
import { LOADING, USERUPDATED } from '../types/usersTypes.js';
 
 const INITIAL_STATE = {
   dependents: [],
   loading: false,
   error: '',
   nombre: '',
   relacion: '',  
   edad: '',
   usuario_id: ''
 };
 
 export default (state = INITIAL_STATE, action) =>{
 
   switch (action.type){
      
      case GETDEPENDENTS:
          return{ ...state, dependents: action.payload, loading: false };
      
      case ERROR:
          return{ ...state, error: action.payload, loading: false };
 
      case LOADING:
          return{ ...state, loading: true};
 
      case CHANGENAME:
          return{ ...state, nombre: action.payload, loading: false};
 
      case CHANGERELATION:
          return{ ...state, relacion: action.payload, loading: false};

      case CHANGERELATION:
          return{ ...state, edad: action.payload, loading: false};
 
      case USERCREATED:
          return{ ...state, nombre: '', relacion: '', edad: '', loading: false, dependents: []};
 
      case USERUPDATED:
          return{ ...state, loading: false, dependents: []};

      case USER_ID:
          return{ ...state, user_id: action.payload, loading: false};
      
      default: return state;
   }
 }