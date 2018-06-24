import {merge} from 'lodash';
import {RECEIVE_DRINKS} from '../actions/drink_actions';

const drinkReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_DRINKS:
      return merge({}, action.payload.drinks);
    default:
      return oldState;
  }
};

export default drinkReducer;
