import React, { Component } from 'react';
import axios from 'axios';


function addCommas(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
   x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


export default class WorldBank extends Component {
  state = {
    popInfo: null,
    countryPopulation: "0",
    generalInfo: null,
    regionId: null,
    regionValue: null,
    incomeLevelId: null,
    incomeLevelValue: null,
    latitude: null,
    longtitude: null,
    capitalCity: ""
  }

  getPopulation(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SP.POP.TOTL?format=json`)
    .then(res => {
      this.setState({ popInfo: res.data, countryPopulation: res.data[1][0].value });
      console.log(this.props.name + " population: " + this.state.countryPopulation);
    });
  }

  getGeneral(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/?format=json`)
    .then(res => {
      this.setState({
        generalInfo: res.data,
        regionId: res.data[1][0]["adminregion"]["id"],
        regionValue: res.data[1][0]["adminregion"]["value"],
        incomeLevelId: res.data[1][0]["incomeLevel"]["id"],
        incomeLevelValue: res.data[1][0]["incomeLevel"]["value"],
        latitude: res.data[1][0]["latitude"],
        longtitude: res.data[1][0]["longtitude"],
        capitalCity: res.data[1][0]["capitalCity"]
      });
    });
  }

  componentDidMount() {
    let code = this.props.code;
    this.getPopulation(code);
    this.getGeneral(code);
  }

  render(){
    return(
      <div>
        <p>Capital City: {this.state.capitalCity}</p>
        <p>{ this.props.name } {new Date().getFullYear() - 1} Population: { addCommas(this.state.countryPopulation) }</p>
        <p></p>
      </div>
    )
  }
}



// axios.get(`http://api.worldbank.org/v2/`)
// http://api.worldbank.org/v2/datacatalog
// http://api.worldbank.org/v2/datacatalog?format=json
// 2,055,505,502,224.73
