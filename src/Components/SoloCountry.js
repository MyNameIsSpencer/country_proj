
import React, { Component } from 'react';
import axios from 'axios';
import DebtSetGDP from './DebtGDP';
import EasyAreaChart from './EasyAreaChart';
import '../CSS/SoloCountry.css';

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

export default class SoloCountry extends Component {
  constructor(props) {
    super(props);
    this.toggleChart = this.toggleChart.bind(this);
    this.renderPopulation = this.renderPopulation.bind(this);
    this.renderPopGrowth = this.renderPopGrowth.bind(this);
    this.renderTradeBalance = this.renderTradeBalance.bind(this);
    this.renderPopDensity = this.renderPopDensity.bind(this);
    this.renderGdp = this.renderGdp.bind(this);
    this.renderGdpPerCapita = this.renderGdpPerCapita.bind(this);
    this.renderNationalDebt = this.renderNationalDebt.bind(this);
    this.renderUnemployment = this.renderUnemployment.bind(this);
    this.renderNationalDeficit = this.renderNationalDeficit.bind(this);
    this.renderLifeExpectency = this.renderLifeExpectency.bind(this);
    this.renderBirthRate = this.renderBirthRate.bind(this);
    this.renderDeathRate = this.renderDeathRate.bind(this);
  }
  state = {
    chartToggle: 0,
    chartData: null,
    chartAxis1: null,
    chartAxis2: null,
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
    countryLongtitude: null,
    capitalCity: "",
    growthData: null,
    countryGrowth: null,
    countryArea: null,
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
        countryLongtitude: res.data[1][0]["countryLongtitude"],
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
    let query = "NY.GDP.PCAP.CD";
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
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
    let query = 'SP.DYN.CDRT.IN';
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
      value = Math.round(value);
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
      deficit = Math.round(deficit);
      if (deficit < 0) {
        deficit = negativeDollar(deficit);
      } else {
        deficit = `$${deficit}`;
      }
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

  renderChart() {
    if (this.state.chartToggle) {
      return (
        (<EasyAreaChart chartData={this.state.chartData} chartAxis1={this.state.chartAxis1} chartAxis2={this.state.chartAxis2} />)
      )
    }
  }

  toggleChart(chartData, axis1, axis2) {
    this.setState({
      chartData: chartData,
      chartAxis1: axis1,
      chartAxis2: axis2
    });
    !this.state.chartToggle ? this.setState({chartToggle: 1}) : this.setState({chartToggle: 0});
  }

  renderPopulation() {
    let pointers = this.state.popData[1].map(record => {
      if (record.value) {
        return {x: record.date, y:(record.value / 1000000)}
      }
    });
    this.toggleChart(pointers, "Year", "Population");
  }

  renderPopGrowth() {
    let pointers = this.state.growthData[1].map(record => {
      if (record.value) {
        return {x: record.date, y:record.value}
      }
    });
    this.toggleChart(pointers, "Year", "Pop Growth %");
  }

  renderPopDensity() {
    let area = this.state.countryArea;
    let pointers = this.state.popData[1].map(record => {
      if (record.value) {
        let density = (record.value / area).toFixed(2);
        return {x: record.date, y: density}
      }
    });
    this.toggleChart(pointers, "Year", "Density (per km²)");
  }

  renderTradeBalance() {
    let data = this.state.tradeBalanceData;
    let pointers = [];
    let mapper = data[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: record.value});
      }
    });
    this.toggleChart(pointers, "Year", "Trade Balance");
  }

  renderGdp() {
    let pointers = [];
    let mapper = this.state.gdpData[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: (record.value / 1000000000)});
      }
    });
    this.toggleChart(pointers, "Year", "(billion $USD");
  }

  renderGdpPerCapita() {
    let pointers = [];
    let mapper = this.state.perCapitaData[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: record.value});
      }
    });
    this.toggleChart(pointers, "Year", "GDP Per Capita");
  }

  renderNationalDebt() {
    let pointers = [];
    let mapCounter = 1800;
    let gdpData = this.state.gdpData[1];
    let mapper = this.state.debtArray[4].Value.map(record => {
      if (record) {
        for (let i = 0; i < gdpData.length; i++) {
          if (gdpData[i].date == mapCounter) {
            pointers.push({x: mapCounter, y: ((gdpData[i].value) / 1000000 / 100 * record)});
            break;
          }
        }
      }
      mapCounter += 1;
    });
    this.toggleChart(pointers, "Year", "National Debt (millions)");
    console.log(gdpData);
  }

  renderUnemployment() {
    let pointers = [];
    let mapper = this.state.unemployData[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: record.value});
      }
    });
    this.toggleChart(pointers, "Year", "Unemployment %");
  }

  renderNationalDeficit() {
    let pointers = [];
    let debtSet = this.state.debtArray;
    let previous = 111111111111111;
    let mapper = this.state.unemployData[1].map(record => {
      if (record.value) {
        if (previous == 111111111111111) {
          previous = record.value;
        } else {
          pointers.push({x: record.date, y: (record.value - previous)});
        }
      }
    });
    console.log(pointers);
    this.toggleChart(pointers, "Year", "Deficit");
  }

  renderLifeExpectency() {
    let pointers = [];
    let mapper = this.state.lifeExpectencyData[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: record.value});
      }
    });
    this.toggleChart(pointers, "Year", "Life Expectency");
  }

  renderBirthRate() {
    let pointers = [];
    let mapper = this.state.birthData[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: record.value});
      }
    });
    this.toggleChart(pointers, "Year", "Birth Rate per 1000");
  }

  renderDeathRate() {
    let pointers = [];
    let mapper = this.state.deathData[1].map(record => {
      if (record.value) {
        pointers.push({x: record.date, y: record.value});
      }
    });
    this.toggleChart(pointers, "Year", "Death Rate per 1000");
  }

  render(){
    return(
      <div className="world-bank">
        <img className="flag" src={this.state.flagUrl} />
        <h1 className="countryName">{this.props.name} </h1>
        <table>
          <tbody>
            <tr>
              <td><p><b>Region:</b></p> </td>
              <td><p className="table-value">{this.state.regionValue}</p> </td>
              <td className="top-table-righter"><p><b>Capital City: </b></p> </td>
              <td><p className="table-value">{this.state.capitalCity}</p> </td>
            </tr>
            <tr>
              <td><p onClick={this.renderPopulation}><b>Population:</b></p></td>
              <td><p className="table-value"> {addCommas(this.state.countryPopulation)}</p></td>
              <td className="table-righter" onClick={this.renderPopGrowth}><p><b>Pop Growth:</b></p></td>
              <td><p className="table-value">{this.state.countryGrowth}%</p></td>
            </tr>
            <tr>
              <td><p onClick={this.renderPopDensity}><b>Pop Density: </b></p></td>
              <td><p className="table-value">{Math.round(this.state.countryPopulation / this.state.countryArea)} per km²</p></td>
              <td className="table-righter"><p><b>Income Level:</b></p></td>
              <td><p className="table-value">{this.state.incomeLevelValue}</p></td>
            </tr>
            <tr>
              <td><p><b>Land Area: </b></p> </td>
              <td><p className="table-value">{addCommas(this.state.countryArea)} km²</p></td>
              <td className="table-righter"><p onClick={this.renderTradeBalance}><b>Trade Balance {this.state.tradeBalanceYear}:</b></p></td>
              <td><p className="table-value">{addCommas(this.state.tradeBalance)}</p></td>
            </tr>
            <tr>
              <td><p onClick={this.renderGdp}><b>GDP:</b></p></td>
              <td><p className="table-value">${addCommas(this.state.countryGdp)}</p></td>
              <td className="table-righter"><p onClick={this.renderGdpPerCapita}><b>GDP per Capita:</b></p></td>
              <td><p className="table-value">${addCommas(this.state.perCapita)}</p></td>
            </tr>
            <tr>
              <td><p onClick={this.renderNationalDebt}><b>National Debt {this.state.debtYear}: </b></p></td>
              <td><p className="table-value">${addCommas(this.state.countryDebt)}</p></td>
              <td className="table-righter"><p onClick={this.renderUnemployment}><b>Unemployment: </b></p></td>
              <td><p className="table-value"> {this.state.unemployment}%</p></td>
            </tr>
            <tr>
              <td><p onClick={this.renderNationalDeficit}><b>National Deficit {this.state.debtYear}: </b></p></td>
              <td><p className="table-value">{addCommas(this.state.countryDeficit)}</p></td>
              <td className="table-righter"><p onClick={this.renderLifeExpectency}><b>Life Expectency at Birth 2016: </b></p></td>
              <td><p className="table-value"> {this.state.lifeExpectency}</p></td>
            </tr>
            <tr>
              <td><p onClick={this.renderDeathRate}><b>Death Rate / 1,000 2015: </b></p></td>
              <td><p className="table-value">{this.state.deathRate}</p></td>
              <td className="table-righter"><p onClick={this.renderBirthRate}><b>Birth Rate / 1,000 2016:</b></p></td>
              <td><p className="table-value">{this.state.birthRate}</p></td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
        <button type="submit" onClick={this.renderPopulation}>Click for Chart</button>
        {this.renderChart()}
        {this.calculateDebtFromGdp()}
        <br />
        <hr />
        <br />
      </div>
    )
  }
}
