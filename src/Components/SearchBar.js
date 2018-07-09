import React, { Component } from 'react';
import AutocompleteBox from './AutocompleteBox';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ letters: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return(
      <div>
        <p> THe SearchBar stuffffffff</p>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Country Name" onChange={this.handleChange} value={this.state.letters}>
          </input>
          <button type="submit"> Submit </button>

        </form>



        




        <AutocompleteBox letters={this.state.letters}/>
      </div>
    );
  }
}

export default SearchBar;
