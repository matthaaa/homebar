import {combineReducers} from 'redux';

const errorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  // TODO: Add conditions for errors here.
  return oldState;
};


export default errorsReducer;
