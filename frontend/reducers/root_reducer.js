import {combineReducers} from 'redux';
import ErrorReducer from './errors_reducer';


const RootReducer = combineReducers({
  errors: ErrorReducer,
});


export default RootReducer;
