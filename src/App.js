import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import WorldBank from './Components/WorldBank';
import CountryList from './Components/CountryList';
import './CSS/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryNames: [],
      countryCodesArr: []
    }
    this.addCountryCode = this.addCountryCode.bind(this);
    this.renderCountries = this.renderCountries.bind(this);
    this.appLogger = this.appLogger.bind(this);
    this.oneCountry = this.oneCountry.bind(this);
   }

  appLogger() {
    console.log("Codes Array: " + this.state.countryCodesArr);
  }

  addCountryCode(code) {
    let tempCountryCodes = this.state.countryCodesArr;
    tempCountryCodes.push(code);
    this.setState({ countryCodesArr: tempCountryCodes });
    this.renderCountries();
  }

  oneCountry(country) {
    
  }

  renderCountries() {
    return this.state.countryCodesArr.map( code => {
      return (
        <li>
          <WorldBank key={ code } code={ code } />
        </li>
      )
    })
  }

  // return(
  //   <ul>
  //     {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
  //   </ul>
  // )

  render() {
    return (
      <div className="App">
        <button type="logger" onClick={this.appLogger}> App Logger </button>
        <SearchBar addCountryCode={this.addCountryCode}/>
        <ul>
          {this.oneCountry()}
          {this.renderCountries()}
        </ul>
      </div>
    );
  }
}

export default App;
