import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import WorldBank from './Components/WorldBank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WorldBank />
      </div>
    );
  }
}

export default App;
