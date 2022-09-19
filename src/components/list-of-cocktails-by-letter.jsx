import React, { useState, useEffect } from 'react';
import Cocktail from './cocktail';
import getCocktailsByLetter from '../services/getCocktailsByLetter';
import '../styles/list-of-cocktails-by-letter.css';

function ListOfCocktailsByLetter({ params }) {

  const { letter } = params;
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getCocktailsByLetter(letter)
      .then(res => {
        setCocktails(res);
      });
  }, [letter]);

  return (
    <div className='coctailsByLetterContainer'>
      {
        cocktails.map(({ idDrink, strDrink, strDrinkThumb }) =>
          <Cocktail id={idDrink} name={strDrink} image={strDrinkThumb} />
        )
      }
    </div>
  );
}

export default ListOfCocktailsByLetter;