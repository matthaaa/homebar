import {combineReducers} from 'redux';
import ErrorReducer from './errors_reducer';
import DrinkReducer from './drink_reducer';


const RootReducer = combineReducers({
  errors: ErrorReducer,
  drinks: DrinkReducer
});


export default RootReducer;
