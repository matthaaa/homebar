import $ from 'jquery';


export const fetchDrinks = () => (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/`
  })
);

export const fetchDrinkByFilter = (filter, query) => {
  switch(filter) {
    case "ingredient":
      const key = "i";
  }

  return (
  $.ajax({
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${key}=${query}`
  });)
};
