import React, { Component } from 'react';


export default class AutocompleteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autocompleteList: []
    };
    this.autocompleter = this.autocompleter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.letters !== nextProps.letters) {
      this.autocompleter();
    }
  }

  clickAutocomleteOption(event) {
    this.props.handleAutocompleteOption(event);
    this.setState({ autocompleteList: []});
    this.renderBox();
  }

  renderBox() {
    if (this.props.letters && this.state.autocompleteList.length < 21 && this.state.autocompleteList.length > 0) {
      return <ul className="autoCountry">{this.state.autocompleteList.map(country => <li key={country} onClick={(event) => {this.clickAutocomleteOption(event)}}>{country}</li>)}</ul>
    }
  }

  autocompleter() {
    let countrArr = Object.keys(this.props.countryList);
    let tempArr = [];
    let userWord = this.props.letters.toLowerCase();
    for (let i =0; i < countrArr.length; i++) {
      if (countrArr[i].toLowerCase().includes(userWord) && countrArr[i] !== userWord) {
        tempArr.push(countrArr[i])
      }
    }
    this.setState({
      autocompleteList: tempArr
    });
  }

  render() {
    return(
      <div>
        {this.renderBox()}
      </div>
    )
  }
}
