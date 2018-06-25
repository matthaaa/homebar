import $ from 'jquery';


export const fetchDrinks = () => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/`
  })
);

export const fetchIngredients = () => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
  })
);

export const fetchGlasses = () => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
  })
);

export const fetchDrinkByFilter = (key, query) => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${key}=${query}`
  })
);
