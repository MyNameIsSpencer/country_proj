import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/WorldBank.css';


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
    flagUrl: null,
    popData: null,
    countryPopulation: "0",
    generalData: null,
    regionId: null,
    regionValue: null,
    incomeLevelId: null,
    incomeLevelValue: null,
    countryLatitude: null,
    countruLongtitude: null,
    capitalCity: "",
    growthData: null,
    countryGrowth: null,
    countryArea: null,
    populationDensity: null,
    gdpData: null,
    countryGDP: null,
    perCapitaData: null,
    perCapita: null
  }

  getPopulation(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SP.POP.TOTL?format=json`)
    .then(res => {
      this.setState({ popData: res.data, countryPopulation: res.data[1][0].value });
      console.log(this.props.name + " population: " + this.state.countryPopulation);
    });
  }

  getGeneral(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/?format=json`)
    .then(res => {
      this.setState({
        generalData: res.data,
        regionId: res.data[1][0]["adminregion"]["id"],
        regionValue: res.data[1][0]["adminregion"]["value"],
        incomeLevelId: res.data[1][0]["incomeLevel"]["id"],
        incomeLevelValue: res.data[1][0]["incomeLevel"]["value"],
        countryLatitude: res.data[1][0]["countryLatitude"],
        countruLongtitude: res.data[1][0]["countruLongtitude"],
        capitalCity: res.data[1][0]["capitalCity"],
      });
    });
  }

  getPopGrowth(code){
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SP.POP.GROW?format=json`)
    .then(res => {
      this.setState({
        growthData: res.data,
        countryGrowth: res.data[1][0].value.toFixed(2)
      });
    });
  }

  getArea(code){
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/AG.LND.TOTL.K2?format=json`)
    .then(res => {
      let area = res.data[1][0].value;
      this.setState({
        countryArea: area
      });
    });
  }

  getGDP(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/NY.GDP.MKTP.CD?format=json`)
    .then(res => {
      this.setState({
        gdpData: res.data,
        countryGDP: res.data[1][0].value.toFixed(2)
      });
    });
  }

  getGDPPerCapita(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SL.GDP.PCAP.EM.KD?format=json`)
    .then(res => {
      this.setState({
        perCapitaData: res.data,
        perCapita: res.data[1][0].value.toFixed(2)
      });
    });
  }

  getGDPPerCapita(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SL.GDP.PCAP.EM.KD?format=json`)
    .then(res => {
      this.setState({
        perCapitaData: res.data,
        perCapita: res.data[1][0].value.toFixed(2)
      });
    });
  }


  // let query = 'DT.NFL.DECT.CD';    <<<<<<Works partially   "Net flows on external debt, total (NFL, current US$)"
  // let query = 'DT.NTR.DECT.CD';     <<<<<<< works partially  Net transfers on external debt are net flows minus interest payments during the year; negative transfers show net transfers made by the borrower to the creditor during the year. Data are in current U.S. dollars
  // let query = 'DT.DOD.PVLX.GN.ZS';   <<<<<< 2016 only    present debt as % of gni

  getPractice(code) {
    let query = 'DT.DOD.PVLX.GN.ZS';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      console.log("Practice");
      console.log(res.data[1]);
    });
  }



  componentDidMount() {
    let code = this.props.code;
    this.getPopulation(code);
    this.getGeneral(code);
    this.getPopGrowth(code);
    this.getArea(code);
    this.getGDP(code);
    this.getGDPPerCapita(code);
    this.getPractice(code);
    this.setState({ flagUrl: `http://www.countryflags.io/${this.props.code}/flat/64.png`});
  }

  render(){
    return(
      <div>
        <img src={this.state.flagUrl} />
        <h1>{this.props.name} </h1>
        <p>Region: {this.state.regionValue}</p>
        <p>Capital City: {this.state.capitalCity}</p>
        <p>Land Area: {addCommas(this.state.countryArea)} km²</p>
        <p>Population: {addCommas(this.state.countryPopulation)}</p>
        <p>Pop Growth: {this.state.countryGrowth}%</p>
        <p>Pop Density: {Math.round(this.state.countryPopulation / this.state.countryArea)} per km²</p>
        <p>Income Level: {this.state.incomeLevelValue}</p>
        <p>GDP: ${addCommas(this.state.countryGDP)}</p>
        <p>GDP per Capita: ${addCommas(this.state.perCapita)}</p>
      </div>
    )
  }
}



// axios.get(`http://api.worldbank.org/v2/`)
// http://api.worldbank.org/v2/datacatalog
// http://api.worldbank.org/v2/datacatalog?format=json
// 2,055,505,502,224.73
