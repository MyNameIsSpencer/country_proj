import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import WorldBank from './Components/WorldBank';
import CountryList from './Components/CountryList';
import './CSS/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryNumber: 0,
      selectedCountries: [],
      countryNames: [],
      countryCodesArr: []
    }
    this.addToSelectedCountries = this.addToSelectedCountries.bind(this);
    // this.renderCountries = this.renderCountries.bind(this);    <<<  don't need???
    this.appLogger = this.appLogger.bind(this);
    this.oneCountry = this.oneCountry.bind(this);
   }

  appLogger() {
    console.log("Codes Array: " + this.state.countryCodesArr);
  }

  oneCountry(country) {
    let newCode = CountryList[country];
    console.log('oneCountry country: ' + country);
    console.log('New Code: ' + newCode);
    this.addToSelectedCountries(country, newCode);
  }

  addToSelectedCountries(countryName, countryCode) {
    let newCountryObject = {id: this.state.countryNumber, name: countryName, code: countryCode}

    let tempSelectedCounties = this.state.selectedCountries;
    tempSelectedCounties.push(newCountryObject);
    let newCountryNumber = this.state.countryNumber + 1;
    this.setState({
      selectedCountries: tempSelectedCounties,
      countryNumber: newCountryNumber
    });
    this.renderCountries();
  }


  renderCountries() {
    return this.state.selectedCountries.map( country => {
      console.log('id: ' + country.id);
      console.log('code: ' + country.code);
      console.log('name: ' + country.name);
      return (
        <li>
          <WorldBank key={country.id} code={country.code} name={country.name}/>
        </li>
      )
    });
  }


  render() {
    return (
      <div className="App">
        <button type="logger" onClick={this.appLogger}> App Logger </button>
        <SearchBar oneCountry={this.oneCountry}/>
        <ul>
          {this.renderCountries()}
        </ul>
      </div>
    );
  }
}

export default App;
