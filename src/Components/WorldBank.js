import React, { Component } from 'react';
import axios from 'axios';
import DebtByGNI from './GniData.js';
import DebtSet from './DebtSet';
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
    countryGDP: null,
    perCapitaData: null,
    perCapita: null,
    gniData: null,
    countryGNI: null,
    countryDebt: null,
    debtSetYear: null,
    debtSetArray: null,
    birthData: null,
    birthRate: null,
    deathData: null,
    deathRate: null,
    deficitData: null,
    deficit: null,
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

  getGNI(code) {
    let query = 'NY.GNP.MKTP.CD';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      this.setState({
        gniData: res.data,
        countryGNI: res.data[1][0].value
      });
      let gni = this.state.countryGNI;
      let percenter = null;
      for (let i = 0; i < DebtByGNI.length; i++) {
        for (var key in DebtByGNI[i]) {
          if (key == this.props.name) {
            percenter = DebtByGNI[i][key][45];
          }
        }
        if (percenter) {
          break;
        }
      }
      let ender = (percenter / 50) * gni;
      ender = parseInt(ender).toFixed(2).toString();
      ender = addCommas(ender);
      this.setState({
        countryDebt: ender
      });
    });
  }

  getDebtArray() {
    for (var key in DebtSet[this.props.name][0]) {
      let debt = DebtSet[this.props.name][0][key][0];
      debt = `${debt},000,000.00`;
      this.setState({
        debtSetYear: key,
        countryDebt: debt,
        debtSetArray: DebtSet[this.props.name][0][key]
      });
    };
  };

  getDebt(code){
    let debtSetArr = ["United States", "Germany", "France", "Canada",
    "Saudi Arabia", "Japan", "United Kingdom", "Italy", "Greece"]
    if (debtSetArr.includes(this.props.name)) {
      this.getDebtArray();
    } else {
      this.getGNI(code);
    }
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

  // getDeficit(code) {  ///// <<<<<<   Need more involved code;  % of GDP
  //   // let query = '	GC.BAL.CASH.GD.ZS';
  //   // let query = 'GC.BAL.CASH.CN';
  //   // let query = 'GC.DOD.TOTL.CN';
  //   // let query = 'NE.DAB.TOTL.CD';
  //   let query = 'NY.GNP.MKTP.CD';
  //
  //   axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
  //   .then(res => {
  //     let deficitData = res.data[1];
  //     let deficit = null;
  //     let deficitYear = null;
  //     for (let i = 0; i < deficitData.length; i ++) {
  //       if (deficitData[i].value && deficitData[i+1].value) {
  //         deficit = deficitData[i].value - deficitData[i+1].value;
  //         deficitYear = deficitData[i].date;
  //             break;
  //       }
  //     }
  //     console.log('Deficit');
  //     console.log(res.data[1]);
  //     if (deficit !== null) {
  //       deficit = deficit.toFixed(2);
  //       let deficitStr = '';
  //       deficitStr = addCommas(deficit.toString());
  //       this.setState({
  //         deficitData: deficitData,
  //         deficitYear: deficitYear,
  //         deficit: deficitStr
  //       });
  //     }
  //   });
  // }

  getUnemployment(code) {  //  <<<< 2017
    let query = 'SL.UEM.TOTL.ZS';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      console.log("Unemployment");
      console.log(res.data[1][0]['value']);
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
      console.log("Life expectency");
      console.log(lifeExpectency);
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
      console.log('trade');
      console.log(res.data);
      let value = null;
      let year = null;
      for (let i = 0; i < res.data[1].length; i ++) {
        if (res.data[1][i]['value'] !== null) {
          let value = res.data[1][i]['value'];
          let year = res.data[1][i]['year'];
        }
      }
      if (value < 0) {
        value = value.toString();
      }
      this.setState({
        tradeBalanceData: res.data,
        tradeBalance: value,
        tradeBalanceYear: year
      });
    });
  }

  // getGeneric(query, stateArr, setValue) {
  //   axios.get(`http://api.worldbank.org/v2/countries/${this.props.code}/indicators/${query}?format=json`)
  //   .then(res => {
  //     this.setState({
  //       stateArr[0]: res.data,
  //       stateArr[1]: setValue
  //     )}
  //   }
  // }

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
    this.getDebt(this.props.code);
    this.getBirthRate(this.props.code);
    this.getDeathRate(this.props.code);
    // this.getDeficit(this.props.code);
    this.getUnemployment(this.props.code);
    this.getLifeExpectency(this.props.code);
    this.getTradeBalance(this.props.code);
    // this.getGeneric('NE.RSB.GNFS.CD', ['tradeBalanceData', 'tradeBalance'], res.data[1][0]['value']);  ////  <<< trade balance
    // this.getPractice(code);
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
        <p>Unemployment: {this.state.unemployment}%</p>
        <p>National Debt: ${this.state.countryDebt}</p>
        {/* <p>National Deficit {this.state.deficitYear}: {this.state.deficit}</p> */}
        <p>National Trade Balance ({this.state.tradeBalanceYear}): ${addCommas(this.state.tradeBalance)}</p>
        <p>Birth Rate 2016 (per 1,000 people): {this.state.birthRate}</p>
        <p>Death Rate 2015 (per 1,000 people): {this.state.deathRate}</p>
        <p>Life Expectency at Birth 2016: {this.state.lifeExpectency}</p>
      </div>
    )
  }
}
