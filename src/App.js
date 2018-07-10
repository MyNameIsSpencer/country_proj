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
    this.addToCountryList = this.addToCountryList.bind(this);
    // this.renderCountries = this.renderCountries.bind(this);
    this.appLogger = this.appLogger.bind(this);
    this.oneCountry = this.oneCountry.bind(this);
   }

  appLogger() {
    console.log("Codes Array: " + this.state.countryCodesArr);
  }

  addToCountryList(countryName, countryCode) {
    let tempCountryList = this.state.countryNames;
    let tempCountryCodes = this.state.countryCodesArr;
    tempCountryList.push(countryName);
    tempCountryCodes.push(countryCode);
    this.setState({
      countryNames: tempCountryList,
      countryCodesArr: tempCountryCodes
    });
    this.renderCountries();
  }


  oneCountry(country) {
    let newCountryNumber = this.countryNumber + 1;
    let newCode = CountryList[country];
    console.log('oneCountry country: ' + country);
    console.log('New Code: ' + newCode);
    this.setState({ countryNumber: newCountryNumber})
    this.addToCountryList(country, newCode);
  }


  renderCountries() {
    return this.state.countryCodesArr.map( code => {
      return (
        <li>
          <WorldBank key={ code } code={ code } />
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
