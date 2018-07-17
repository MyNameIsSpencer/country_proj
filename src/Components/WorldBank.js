import React, { Component } from 'react';
import axios from 'axios';
import DebtSetGDP from './DebtGDP';
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

function negativeDollar(num) {
  return `-$${addCommas(Math.abs(num))}`;
}

export default class WorldBank extends Component {
  state = {
    testCountry: "Laos",
    flagUrl: null,
    popData: null,
    countryPopulation: null,
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
    countryGdp: null,
    gdpYear: null,
    perCapitaData: null,
    perCapita: null,
    debtCounter: 0,
    debtGdpPercent: null,
    prevDebtGdpPercent: null,
    countryDebt: null,
    prevCountryDebt: null,
    countryDeficit: null,
    debtYear: null,
    debtArray: null,
    birthData: null,
    birthRate: null,
    deathData: null,
    deathRate: null,
    countryDeficit: null,
    deficitYear: null,
    unemployData: null,
    unemployment: null,
    lifeExpectencyData: null,
    lifeExpectency: null,
    tradeBalanceData: null,
    tradeBalance: null,
    tradeBalanceYear: null
  }

  getPopulation(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SP.POP.TOTL?format=json`)
    .then(res => {
      this.setState({ popData: res.data, countryPopulation: res.data[1][0].value });
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
        countryGdp: Math.round(res.data[1][0].value),
      });
    });
  }

  getGDPPerCapita(code) {
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/SL.GDP.PCAP.EM.KD?format=json`)
    .then(res => {
      this.setState({
        perCapitaData: res.data,
        perCapita: Math.round(res.data[1][0].value)
      });
    });
  }

  getBirthRate(code){  //  <<<< for 2016
    let query = 'SP.DYN.CBRT.IN';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      this.setState({
        birthData: res.data,
        birthRate: res.data[1][1]['value']
      });
    });
  }

  getDeathRate(code) {  //   <<<<< for 2015
    let query = '	SP.DYN.CDRT.IN';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      let deathRate = res.data[1][1]['value'];
      deathRate = Math.round(deathRate);
      this.setState({
        deathData: res.data,
        deathRate: deathRate
      });
    });
  }


  getUnemployment(code) {  //  <<<< 2017
    let query = 'SL.UEM.TOTL.ZS';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      let unemployment = res.data[1][0]['value'].toFixed(3);
      this.setState({
        unemployData: res.data,
        unemployment: unemployment
      });
    });
  }

  getLifeExpectency(code) {  //  <<<<  2016
    let query = 'SP.DYN.LE00.IN';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      let lifeExpectency = res.data[1][1]['value'];
      lifeExpectency = Math.round(lifeExpectency);
      this.setState({
        lifeExpectencyData: res.data,
        lifeExpectency: lifeExpectency
      });
    });
  }

  getTradeBalance(code) {   /////  <<<< 2017, positive is net export, negative is net import
    let query = 'NE.RSB.GNFS.CD';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      let value = null;
      let year = null;
      for (let i = 0; i < res.data[1].length; i ++) {
        if (res.data[1][i].value !== null) {
          value = res.data[1][i].value;
          year = res.data[1][i].date;
          break;
        }
      }
      if (value < 0) {
        value = negativeDollar(value);
      }
      this.setState({
        tradeBalanceData: res.data,
        tradeBalance: value,
        tradeBalanceYear: year
      });
    });
  }


  getDebt(){
    let countryList = DebtSetGDP[2].Countries;
    let debtGdpPercent = null;
    let debtGdpData = null;
    let prevDebtGdpData = null;
    let prevDebtGdpPercent = null;
    let valueSet = null;
    let debtYear = null;
    for (let i=0; i < countryList.length; i++) {
      if (countryList[i][0] === this.props.name) {
        debtGdpData = countryList[i];
        prevDebtGdpData = countryList[i+1];
        valueSet = countryList[i][4].Value;
        for (let j = valueSet.length - 1; j > 0; j --) {
          if (valueSet[j] != null) {
            debtGdpPercent = valueSet[j];
            prevDebtGdpPercent = valueSet[j-1];
            debtYear = j + 1800;
            break;
          }
        }
      }
    }
    this.setState({
      debtGdpPercent: debtGdpPercent,
      prevDebtGdpPercent: prevDebtGdpPercent,
      debtYear: debtYear,
      debtArray: debtGdpData
    });
  }


  calculateDebtFromGdp() {
    let gdpDataSet = this.state.gdpData;
    let gdpOfDebtYear = null;
    let prevGdpOfDebtYear = null;
    let countryDebt = null;
    let prevCountryDebt = null;
    let deficit = null;
    if (gdpDataSet !== null && this.state.debtCounter < 1) {
      this.setState({
        debtCounter: 2
      });
      for (let i = 0; i < gdpDataSet.length; i++) {
        if (gdpDataSet[1][i].date == this.state.debtYear) {
          gdpOfDebtYear = gdpDataSet[1][i].value;
          prevGdpOfDebtYear = gdpDataSet[1][i+1].value;
        }
      }
      countryDebt = (this.state.debtGdpPercent) / 100 * gdpOfDebtYear;
      countryDebt = Math.round(countryDebt);
      prevCountryDebt = (this.state.prevDebtGdpPercent) / 100 * prevGdpOfDebtYear;
      prevCountryDebt = Math.round(prevCountryDebt);
      deficit = countryDebt - prevCountryDebt;
      deficit = deficit.toFixed(2);
      this.setState({
        countryDebt: countryDebt,
        prevCountryDebt: prevCountryDebt,
        countryDeficit: deficit
      });
    }
  }


  // getPractice(code) {
  //   let query = 'SP.DYN.CBRT.IN';
  //   axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
  //   .then(res => {
  //     console.log(res.data);
  //   });
  // }

  componentDidMount() {
    this.getPopulation(this.props.code);
    this.getGeneral(this.props.code);
    this.getPopGrowth(this.props.code);
    this.getArea(this.props.code);
    this.getGDP(this.props.code);
    this.getGDPPerCapita(this.props.code);
    this.setState({ flagUrl: `http://www.countryflags.io/${this.props.code}/flat/64.png`});
    this.getBirthRate(this.props.code);
    this.getDeathRate(this.props.code);
    this.getDebt();
    this.getUnemployment(this.props.code);
    this.getLifeExpectency(this.props.code);
    this.getTradeBalance(this.props.code);
  }

  render(){
    return(
      <div>
        <img className="flag" src={this.state.flagUrl} />
        <h1 className="countryName">{this.props.name} </h1>
        <p className="outside-table"><b>Region:</b> {this.state.regionValue}</p>
        <table>
          <tbody>
            <tr>
              <td><p><b>Capital City: </b></p> </td>
              <td><p>{this.state.capitalCity}</p> </td>
              <td className="table-righter"><p><b>Land Area:</b> </p></td>
              <td><p>{addCommas(this.state.countryArea)} km²</p></td>
            </tr>
            <tr>
              <td><p><b>Population:</b></p></td>
              <td><p> {addCommas(this.state.countryPopulation)}</p></td>
              <td className="table-righter"><p><b>Pop Growth:</b></p></td>
              <td><p>{this.state.countryGrowth}%</p></td>
            </tr>
            <tr>
              <td><p><b>Pop Density: </b></p></td>
              <td><p>{Math.round(this.state.countryPopulation / this.state.countryArea)} per km²</p></td>
              <td className="table-righter"><p><b>Income Level:</b></p></td>
              <td><p>{this.state.incomeLevelValue}</p></td>
            </tr>
            <tr>
              <td><p><b>GDP:</b></p></td>
              <td><p>${addCommas(this.state.countryGdp)}</p></td>
              <td className="table-righter"><p><b>GDP per Capita:</b></p></td>
              <td><p>${addCommas(this.state.perCapita)}</p></td>
            </tr>
            <tr>
              <td><p><b>National Debt {this.state.debtYear}: </b></p></td>
              <td><p>${addCommas(this.state.countryDebt)}</p></td>
              <td className="table-righter"><p><b>Unemployment: </b></p></td>
              <td><p> ${this.state.unemployment}%</p></td>
            </tr>
            <tr>
              <td><p><b>National Deficit {this.state.debtYear}: </b></p></td>
              <td><p>${addCommas(this.state.countryDeficit)}</p></td>
              <td className="table-righter"><p><b>Birth Rate 2016 / 1,000:</b></p></td>
              <td><p>{this.state.birthRate}</p></td>
            </tr>
            <tr>
              <td><p><b>Death Rate 2015 / 1,000: </b></p></td>
              <td><p id="table-value">{this.state.deathRate}</p></td>
              <td><p><b>Trade Balance {this.state.tradeBalanceYear}:</b></p></td>
              <td><p>{addCommas(this.state.tradeBalance)}</p></td>
            </tr>
            <tr>
              <td><p><b>Life Expectency at Birth 2016: </b></p></td>
              <td><p id="table-value"> {this.state.lifeExpectency}</p></td>
            </tr>
          </tbody>
        </table>
        <p>{this.calculateDebtFromGdp()}</p>
        <br />
        <hr />
        <br />
      </div>
    )
  }
}
