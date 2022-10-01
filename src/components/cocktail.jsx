import React, { useContext } from "react";
import { CocktailContext } from "../services/cocktaill-context-provider";
import getCocktailsByID from '../services/getCocktailByID';
import '../styles/carousel-coctel.css';

function Cocktail({ id, name, image }) {

  const { cocktail, updateCocktail } = useContext(CocktailContext);

  const openCocktail = () => {
    getCocktailsByID(id)
      .then(res => {
        updateCocktail({
          ...res,
        }, true);
      });
  };

  return (
    <div className="contenedor">
      <button onClick={openCocktail}>
        <h1>{name}</h1>
        <img src={image} alt="imagen" />
      </button>
    </div>
  );
}

export default Cocktail;