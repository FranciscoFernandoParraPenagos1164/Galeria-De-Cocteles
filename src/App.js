import React, { useContext } from 'react';
import './styles/App.css';
import { Route } from 'wouter';
import Header from './components/header';
import DemostracionCocteles from './components/cocktails-demostration';
import ListOfCocktailsByLetter from './components/list-of-cocktails-by-letter';
import 'materialize-css/dist/css/materialize.min.css';
import { ContextProvider } from './services/cocktaill-context-provider';
import CocktailModal from './components/cocktail-modal';

function App() {

  return (
    <div className='App'>
      <ContextProvider>
        <Header />
        <Route path='' component={DemostracionCocteles} />
        <Route path='/letter/:letter' component={ListOfCocktailsByLetter} />
        <CocktailModal />
      </ContextProvider>
    </div>
  );
}

export default App;
