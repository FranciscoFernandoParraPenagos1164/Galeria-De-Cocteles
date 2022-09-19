function getRandomCoctel() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      let coctails = res.drinks[0];
      let { idDrink, strDrink, strDrinkThumb } = coctails;
      return { idDrink, strDrink, strDrinkThumb };
    });
};

export default getRandomCoctel;