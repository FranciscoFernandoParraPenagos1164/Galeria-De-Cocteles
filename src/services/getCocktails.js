import getRandomCoctel from "./getRandomCocktail";

function getCocktails(type) {
  let array = [];
  if (typeof type == 'string') {
    for (let i = 0; i < 7; i++) {
      array.push(getRandomCoctel());
    }
  } else if (typeof type == 'object') {
    type.forEach(coctail => {
      array.push(coctail);
    });
  }
  return array;
}

export default getCocktails;