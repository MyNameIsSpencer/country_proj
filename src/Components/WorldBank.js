import React, { Component } from 'react';
import axios from 'axios';
import DebtByGNI from './GniData.js';
import DebtSet from './DebtSet';
import debtSetGDP from './DebtGDP';
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

// GC.DOD.TOTL.GD.ZS

  getGNI(code) {
    // let query = 'NY.GNP.MKTP.CD';
    let query = 'GC.DOD.TOTL.GD.ZS';
    axios.get(`http://api.worldbank.org/v2/countries/${code}/indicators/${query}?format=json`)
    .then(res => {
      console.log('GNI');
      console.log(res.data);
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
              <td><p>${addCommas(this.state.countryGDP)}</p></td>
              <td className="table-righter"><p><b>GDP per Capita:</b></p></td>
              <td><p>${addCommas(this.state.perCapita)}</p></td>
            </tr>
            <tr>
              <td><p><b>Unemployment:</b></p></td>
              <td><p>{this.state.unemployment}%</p></td>
              <td className="table-righter"><p><b>National Debt: </b></p></td>
              <td><p> ${this.state.countryDebt}</p></td>
            </tr>
            <tr>
              <td><p><b>Trade Balance ({this.state.tradeBalanceYear}):</b></p></td>
              <td><p>${addCommas(this.state.tradeBalance)}</p></td>
              <td className="table-righter"><p><b>Birth Rate 2016 / 1,000:</b></p></td>
              <td><p>{this.state.birthRate}</p></td>
            </tr>
            <tr>
              <td><p><b>Death Rate 2015 / 1,000: </b></p></td>
              <td><p id="table-value">{this.state.deathRate}</p></td>
              <td className="table-righter"><p><b>Life Expectency at Birth 2016: </b></p></td>
              <td><p id="table-value"> {this.state.lifeExpectency}</p></td>
            </tr>
          </tbody>
        </table>
        {/* <p>National Deficit {this.state.deficitYear}: {this.state.deficit}</p> */}
        <br />
        <hr />
        <br />
      </div>
    )
  }
}
