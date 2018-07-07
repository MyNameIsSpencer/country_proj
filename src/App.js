import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import Pop1 from './Components/Pop1';
import WorldBank from './Components/WorldBank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Pop1 />
        <WorldBank />
      </div>
    );
  }
}

export default App;
