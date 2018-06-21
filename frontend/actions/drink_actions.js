import * as DrinkAPIUtil from '../util/drink_api_util';


export const RECEIVE_DRINKS_BY_INGREDIENT = 'RECEIVE_DRINKS_BY_INGREDIENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const requestDrinksByIngredient = (ingredient) => dispatch => (
  DrinkAPIUtil.fetchPost(ingredient).then(payload => dispatch(receiveDrinksByIngredient(payload))
), err => (
    dispatch(receiveErrors(err.responseJSON))
));

export const receiveDrinksByIngredient = (payload) => ({
  type: RECEIVE_DRINKS_BY_INGREDIENT,
  payload,
})

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
