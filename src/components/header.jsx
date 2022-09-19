import React from 'react';
import '../styles/header.css';
import lupa from '../assets/lupa.png';
import { Link } from 'wouter';

function Header() {

  let letters = 'abcdefghijklmnñopqrstuvwxyz';

  return (
    <header id='header'>
      <div id='header-content'>
        <Link to='/'><h1>GALERIA DE COCTELES</h1></Link>
        <div id='header-search-by-name'>
          <input type="text" placeholder='Buscar por nombre' id='header-input' />
          <button><img src={lupa} alt="lupa" /></button>
        </div>
      </div>
      <h4>Buscar por letra</h4>
      <div id='search-by-char'>
        {
          letters.split("").map(letra => <Link to={`/letter/${letra}`}><button key={letra} onClick={() => { console.log(letra); }}>{letra}</button></Link>)
        }
      </div>
    </header>
  );
};

export default Header;