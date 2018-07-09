import React, { Component } from 'react';
import AutocompleteBox from './AutocompleteBox';
import '../CSS/SearchBar.css';
import CountryList from './CountryList';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: "",
      countryCode: ""
    }
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleAutocompleteOption = this.handleAutocompleteOption.bind(this);
  }

  handleUserInputChange(event) {
    event.preventDefault();
    this.setState({ letters: event.target.value });
  }

  handleAutocompleteOption(event) {
    console.log(event.target.innerText);
    this.setState({ letters: event.target.innerText });
  }


  render() {
    return(
      <div>
        <p> THe SearchBar stuffffffff</p>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Country Name" onChange={this.handleUserInputChange} value={this.state.letters}>
          </input>
          <button type="submit"> Submit </button>

        </form>

        <AutocompleteBox letters={this.state.letters} countryList={CountryList} handleAutocompleteOption={this.handleAutocompleteOption}/>
      </div>
    );
  }
}

export default SearchBar;
