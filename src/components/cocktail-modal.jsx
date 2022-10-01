import React, { useEffect, useContext } from 'react';
import { CocktailContext } from '../services/cocktaill-context-provider';
import '../styles/cocktail-modal.css';

function CocktailModal() {

  const { cocktail, updateCocktail } = useContext(CocktailContext);

  const closeModal = () => {
    updateCocktail({}, false);
  };

  if (cocktail.active) {
    return (
      <div className='cocktail-modal-container'>
        <button onClick={closeModal}>SALIR</button>
        <div className="cocktail-modal-content">
          <img src={cocktail.cocktail.strDrinkThumb} alt="cocktail-img" srcset="" />
          <div className="cocktail-modal-text">
            <h1>{cocktail.cocktail.strDrink}</h1>
            <p>CATEGORIA : {cocktail.cocktail.strCategory}</p>
            <p>ALCOHOL : {cocktail.cocktail.strAlcoholic}</p>
            <p>PREPARACION : {cocktail.cocktail.strInstructions}</p>
            <p>INGREDIENTS : </p>
            {
              cocktail.cocktail.strIngredients.map(ingredient =>
                ingredient !== null ? <p>-{ingredient}</p> : <></>
              )
            }
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }

}

export default CocktailModal;