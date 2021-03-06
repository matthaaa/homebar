import * as DrinkAPIUtil from '../util/drink_api_util';


export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS';


export const requestDrinksByIngredient = (ingredient) => dispatch => (
  DrinkAPIUtil.fetchDrinkByFilter("i", ingredient).then(payload => dispatch(receiveDrinks(payload))
), err => (
    dispatch(receiveErrors(err.responseJSON))
));

export const requestDrinksByGlass = (glass) => dispatch => (
  DrinkAPIUtil.fetchDrinkByFilter("g", glass).then(payload => dispatch(receiveDrinks(payload))
), err => (
    dispatch(receiveErrors(err.responseJSON))
));

export const requestIngredients = () => dispatch => (
  DrinkAPIUtil.fetchIngredients().then(payload => dispatch(receiveIngredients(payload))
), err => (
    dispatch(receiveErrors(err.responseJSON))
));

export const receiveDrinks = (payload) => ({
  type: RECEIVE_DRINKS,
  payload,
})

export const receiveIngredients = (payload) => ({
  type: RECEIVE_INGREDIENTS,
  payload,
})

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
