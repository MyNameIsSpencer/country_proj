import React, { Component } from 'react';
import CorrMatrix from './CorrMatrix';
import '../CSS/GlobalAnalytics.css';


export default class GlobalAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndicators: []
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  addSelectedIndicator(valure) {
    let tempArr = this.state.selectedIndicators;
    tempArr.push(valure);
    this.setState({
      selectedIndicators: tempArr
    });
  }

  removeSelectedIndicator(valure){
    let tempArr = this.state.selectedIndicators;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === valure) {
        tempArr.splice(i, 1);
      }
    }
    for (let indicator of tempArr) {
      console.log(indicator);
    }
  }

  handleCheckboxChange(valure) {
    (!this.state.selectedIndicators.includes(valure) ? this.addSelectedIndicator(valure) : this.removeSelectedIndicator(valure));
    // this.setState({
    //   s
    // })
  }

  render(){
    return(
      <div>
        <form>

          <ul className="list-column">
            <li><label><input type="checkbox" indicator="SP.POP.TOTL" value="population" onChange={e => this.handleCheckboxChange(e.target.indicator)} /> Population</label></li>
            <li><label><input type="checkbox" value="popGrowthPercent" onChange={e => this.handleCheckboxChange(e.target.value)} /> Population Growth(%)</label></li>
            <li><label><input type="checkbox" value="popDensity" onChange={e => this.handleCheckboxChange(e.target.value)} /> Population Density(/km²)</label></li>
            <li><label><input type="checkbox" value="gdp" onChange={e => this.handleCheckboxChange(e.target.value)} /> GDP</label></li>
            <li><label><input type="checkbox" value="gdpGrowthPercent" onChange={e => this.handleCheckboxChange(e.target.value)} /> GDP growth(%)</label></li>
            <li><label><input type="checkbox" value="perCapita" onChange={e => this.handleCheckboxChange(e.target.value)} /> Per Capita</label></li>
            <li><label><input type="checkbox" value="debt" onChange={e => this.handleCheckboxChange(e.target.value)} /> Country Debt</label></li>
          </ul>
          <ul className="list-column">
            <li><label><input type="checkbox" value="deficitPrev" onChange={e => this.handleCheckboxChange(e.target.value)} /> Deficit (% prev)</label></li>
            <li><label><input type="checkbox" value="deficitGdp" onChange={e => this.handleCheckboxChange(e.target.value)} /> Deficit (% GDP)</label></li>
            <li><label><input type="checkbox" value="unemployment" onChange={e => this.handleCheckboxChange(e.target.value)} /> Unemployment (%)</label></li>
            <li><label><input type="checkbox" value="birthRate" onChange={e => this.handleCheckboxChange(e.target.value)} /> Birth Rate per 1000</label></li>
            <li><label><input type="checkbox" value="deathRate" onChange={e => this.handleCheckboxChange(e.target.value)} /> Death Rate per 1000</label></li>
            <li><label><input type="checkbox" value="lifeExpectency" onChange={e => this.handleCheckboxChange(e.target.value)} /> Life Expectency</label></li>
            <li><label><input type="checkbox" value="tradeBalance" onChange={e => this.handleCheckboxChange(e.target.value)} /> Trade Balance</label></li>
          </ul>
          <br/>
          <input type="submit" value="Submit" />
        </form>

        <CorrMatrix indicatorList={this.state.selectedIndicators} />
      </div>
    )
  }

}
