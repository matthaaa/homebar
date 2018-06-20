import * as DrinkAPIUtil from '../util/drink_api_util';


export const RECEIVE_DRINKS_BY_INGREDIENT = 'RECEIVE_DRINKS_BY_INGREDIENT';


export const requestDrinksByIngredient = (ingredient) => dispatch => (
  DrinkAPIUtil.fetchPost(ingredient).then(payload => dispatch(receiveDrinksByIngredient(payload)))
);

export const receiveDrinksByIngredient = (payload) => ({
  type: RECEIVE_DRINKS_BY_INGREDIENT,
  payload,
})
