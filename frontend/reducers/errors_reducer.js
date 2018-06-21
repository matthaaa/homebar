import {merge} from 'lodash';
import {RECEIVE_ERRORS, RECEIVE_DRINKS_BY_INGREDIENT} from '../actions/drink_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge([], oldState, action.errors);
    case RECEIVE_DRINKS_BY_INGREDIENT:
      return null;
    default:
      return oldState;
  }
};

export default errorsReducer;
