import React, { Component } from 'react';
import AutocompleteBox from './AutocompleteBox';
import '../CSS/SearchBar.css';
import CountryList from './CountryList';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: "",
    }
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleAutocompleteOption = this.handleAutocompleteOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logger = this.logger.bind(this);
  }

  logger(event) {
    event.preventDefault();
    console.log("Letters: " + this.state.letters);
  }

  handleUserInputChange(event) {
    event.preventDefault();
    this.setState({ letters: event.target.value });
  }

  handleAutocompleteOption(event) {
    event.preventDefault();
    this.setState({ letters: event.target.innerText });
  }


  handleSubmit(event) {
    event.preventDefault();
    let selectedCountry = this.state.letters;
    this.props.oneCountry(selectedCountry);
  }

  render() {
    return(
      <div>
        <p> THe SearchBar stuffffffff</p>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Country Name" onChange={this.handleUserInputChange} value={this.state.letters}>
          </input>
          <button type="submit" onClick={this.handleSubmit}> Submit </button>
          <button type="logger" onClick={this.logger}> Logger </button>

        </form>

        <AutocompleteBox letters={this.state.letters} countryList={CountryList} handleAutocompleteOption={this.handleAutocompleteOption}/>
      </div>
    );
  }
}

export default SearchBar;
