function getCocktailsByName(letter) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${letter}`)
    .then(res => res.json())
    .then(res => {
      if (res.drinks !== null) {
        let coctails = res.drinks;
        let { idDrink } = coctails[0];
        return idDrink;
      } else {
        alert('no existen cocteles con este nombre');
        return [];
      }
    });
}

export default getCocktailsByName;