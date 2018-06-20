import * as DrinkAPIUtil from '../util/drink_api_util';


export const RECEIVE_DRINK_BY_INGREDIENT = 'RECEIVE_DRINK_BY_INGREDIENT';


export const requestDrinkByIngredient = (ingredient) => dispatch => (
  DrinkAPIUtil.fetchPost(ingredient).then(payload => dispatch(receiveDrinkByIngredient(payload)))
);

export const receiveDrinkByIngredient = (payload) => ({
  type: RECEIVE_DRINK_BY_INGREDIENT,
  payload,
})
