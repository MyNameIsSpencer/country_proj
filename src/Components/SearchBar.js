import React, { Component } from 'react';
import AutocompleteBox from './AutocompleteBox';
import '../CSS/SearchBar.css';
import CountryList from './CountryList';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: "",
      autocompleteList: [],
      countryCode: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ letters: event.target.value });
    console.log(CountryList);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //
  //   for (let i = 0; i < country_list.length; i++) {
  //     if (letters.toLowerCase() == Object.keys(country_list)[i].toLowerCase()) {
  //       this.state.countryCode = country_list[i];
  //     }
  //
  //   }
  //
  //   // componentDidMount() {
  //   //   axios.get(`
  //   //     http://api.worldbank.org/v2/countries/wld/indicators/SP.POP.TOTL?format=json
  //   //     `)
  //   //   .then(res => {
  //   //     this.setState({ info: res.data });
  //   //     this.setState({ popper: res.data[1][0].value });
  //   //     console.log(this.state.popper);
  //   //
  //   //   });
  //   // }
  //
  //
  // }

  render() {
    return(
      <div>
        <p> THe SearchBar stuffffffff</p>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Country Name" onChange={this.handleChange} value={this.state.letters}>
          </input>
          <button type="submit"> Submit </button>

        </form>

        <AutocompleteBox letters={this.state.letters} countryList={CountryList}/>
      </div>
    );
  }
}

export default SearchBar;
