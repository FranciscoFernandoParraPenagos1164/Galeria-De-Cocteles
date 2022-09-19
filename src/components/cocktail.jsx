import React from "react";
import '../styles/carousel-coctel.css';

function Cocktail({ id, name, image }) {

  return (
    <div className="contenedor">
      <button onClick={() => console.log(id)}>
        <h1>{name}</h1>
        <img src={image} alt="imagen" />
      </button>
    </div>
  );
}

export default Cocktail;