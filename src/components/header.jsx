import React, { useContext, useRef } from 'react';
import '../styles/header.css';
import lupa from '../assets/lupa.png';
import { Link } from 'wouter';
import getCocktailsByName from '../services/getCocktailByName';
import getCocktailsByID from '../services/getCocktailByID';
import { CocktailContext } from '../services/cocktaill-context-provider';

function Header() {

  let letters = 'abcdefghijklmnñopqrstuvwxyz';
  const elementRef = useRef();
  const { updateCocktail } = useContext(CocktailContext);

  const openCocktail = (e) => {
    e.preventDefault();
    getCocktailsByName(elementRef.current.value)
      .then(cocktail => {
        getCocktailsByID(cocktail)
          .then(res => {
            updateCocktail({
              ...res,
            }, true);
          });
      });
    elementRef.current.value = "";
  };

  return (
    <header id='header'>
      <div id='header-content'>
        <Link to='/'><h1>GALERIA DE COCTELE</h1></Link>
        <form id='header-search-by-name' onSubmit={openCocktail}>
          <input type="text" placeholder='Buscar por nombre' id='header-input' ref={elementRef} />
          <button><img src={lupa} alt="lupa" /></button>
        </form>
      </div>
      <h4>Buscar por letra</h4>
      <div id='search-by-char'>
        {
          letters.split("").map(letra => <Link to={`/letter/${letra}`} key={letra}><button>{letra}</button></Link>)
        }
      </div>
    </header>
  );
};

export default Header;