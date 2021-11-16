import './App.css';
import React from 'react';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';

import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='app'>
      <SearchBar />
      <Home />
      <PokemonDetail />
    </div>
  );
}

export default App;
