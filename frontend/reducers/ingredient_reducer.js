import {merge} from 'lodash';
import {RECEIVE_INGREDIENTS} from '../actions/drink_actions';

const drinkReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_INGREDIENTS:
      return merge({}, action.payload.ingredients);
    default:
      return oldState;
  }
};

export default drinkReducer;
