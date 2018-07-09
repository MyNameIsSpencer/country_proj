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

  renderBox() {
    if (this.props.letters && this.state.autocompleteList.length < 21) {
      return <ul className="autoCountry">{this.state.autocompleteList.map(country => <li key={country}>{country}</li>)}</ul>
    }
  }

  autocompleter() {
    let countrArr = Object.keys(this.props.countryList);
    let tempArr = [];
    let userWord = this.props.letters.toLowerCase();
    for (let i =0; i < countrArr.length; i++) {
      if (countrArr[i].toLowerCase().includes(userWord)) {
        tempArr.push(countrArr[i])
      }
    }
    this.setState({
      autocompleteList: tempArr
    });
    console.log(this.state.autocompleteList);
  }

  render() {
    return(
      <div>
        {this.renderBox()}
      </div>
    )
  }
}
