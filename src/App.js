import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Mapper from './Mapper';
import SimpleMap from './SimpleMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Woooooaaaahhhh    Here it is!!!!</p>
        <SearchBar />
        <Mapper />
        <SimpleMap />
      </div>
    );
  }
}

export default App;
