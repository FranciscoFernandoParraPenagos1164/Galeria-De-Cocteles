import getCocktails from "./getCocktails";

function getCocktailsByLetter(letter) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(res => res.json())
    .then(res => {
      if (res.drinks !== null) {
        let coctails = res.drinks;
        let array = coctails.map(coctail => {
          let { idDrink, strDrink, strDrinkThumb } = coctail;
          return { idDrink, strDrink, strDrinkThumb };
        });
        return getCocktails(array);
      } else {
        alert('no existen cocteles con esta letra');
        return [];
      }
    });
}

export default getCocktailsByLetter;