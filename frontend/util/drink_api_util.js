export const fetchDrinks = () => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/`
  })
);

export const fetchDrink = (idDrink) => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  })
);
