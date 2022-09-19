import React from 'react';
import './styles/App.css';
import { Link, Route } from 'wouter';
import Header from './components/header';
import DemostracionCocteles from './components/cocktails-demostration';
import ListOfCocktailsByLetter from './components/list-of-cocktails-by-letter';
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Route path='' component={DemostracionCocteles} />
      <Route path='/letter/:letter' component={ListOfCocktailsByLetter} />
    </div>
  );
}

export default App;
