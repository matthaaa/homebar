import {merge} from 'lodash';
import {RECEIVE_DRINKS_BY_INGREDIENT} from '../actions/drink_actions';

const drinksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_DRINKS_BY_INGREDIENT:
      return merge({}, action.payload.drinks);
    default:
      return oldState;
  }
};

export default drinksReducer;
