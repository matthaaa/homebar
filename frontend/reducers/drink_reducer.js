import {merge} from 'lodash';
import {RECEIVE_DRINK_BY_INGREDIENT} from '../actions/drink_actions';

const drinkReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_DRINK_BY_INGREDIENT:
      return merge({}, action.payload.drink);
    default:
      return oldState;
  }
};

export default drinkReducer;
