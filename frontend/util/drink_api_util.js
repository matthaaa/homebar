export const fetchDrinks = () => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/`
  })
);

export const fetchDrinkByIngredient = (ingredient) => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
  })
);
