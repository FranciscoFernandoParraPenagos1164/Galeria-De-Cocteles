import getCocktails from "./getCocktails";

function getCocktailsByLetter(letter) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(res => res.json())
    .then(res => {
      let coctails = res.drinks;
      let array = coctails.map(coctail => {
        let { idDrink, strDrink, strDrinkThumb } = coctail;
        return { idDrink, strDrink, strDrinkThumb };
      });
      return getCocktails(array);
    });
}

export default getCocktailsByLetter;