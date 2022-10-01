import React, { useState } from "react";

const CocktailContext = React.createContext({});

export function ContextProvider({ children }) {

  const [cocktail, setCocktail] = useState({
    active: false,
    cocktail: { strIngredients: [] }
  });

  const updateCocktail = (newCocktail, state) => {
    setCocktail({
      cocktail: newCocktail,
      active: state
    });
  };

  return <CocktailContext.Provider value={{ cocktail, updateCocktail }}>
    {children}
  </CocktailContext.Provider>;
}

export { CocktailContext };