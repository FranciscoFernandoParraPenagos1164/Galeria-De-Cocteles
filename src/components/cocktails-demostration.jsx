import React, { useState, useEffect } from "react";
import '../styles/demostracion-de-cocteles.css';
import M from 'materialize-css';
import Cocktail from './cocktail';
import getCocktails from "../services/getCocktails";

function DemostracionCocteles() {

  const [coctel, setCoctel] = useState([]);

  const initCarousel = () => {
    const carouselConfig = {
      duration: 200,
      dist: -70,
      shift: -20,
      padding: -15,
      numVisible: 5,
      indicators: true,
    };
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, carouselConfig);
    const instance = M.Carousel.getInstance(elems[0]);
    const interval = setInterval(() => {
      instance.next();
    }, 5000);
    document.querySelector('.carousel').addEventListener('click', () => {
      clearInterval(interval);
    });
  };

  useEffect(() => {
    Promise.all(getCocktails(''))
      .then(coctel => {
        setCoctel(coctel);
        initCarousel();
      });
  }, []);

  return (
    <div className="demostracion-de-cocteles">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="carousel center-align">
              {
                coctel.map(({ idDrink, strDrink, strDrinkThumb }) =>
                  <div className="carousel-item">
                    <Cocktail id={idDrink} name={strDrink} image={strDrinkThumb} />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemostracionCocteles;