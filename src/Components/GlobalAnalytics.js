import React, { Component } from 'react';
import CorrMatrix from './CorrMatrix';
import '../CSS/GlobalAnalytics.css';


export default class GlobalAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndicators: [],
      matrixSwitch: 0
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.renderMatrix = this.renderMatrix.bind(this);
  }

  addSelectedIndicator(namer) {
    let tempArr = this.state.selectedIndicators;
    tempArr.push(namer);
    this.setState({
      selectedIndicators: tempArr
    });
  }

  removeSelectedIndicator(namer){
    let tempArr = this.state.selectedIndicators;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === namer) {
        tempArr.splice(i, 1);
      }
    }
    this.setState({ selectedIndicators: tempArr });
    console.log(this.state.selectedIndicators);
  }

  handleCheckboxChange(namer) {
    (!this.state.selectedIndicators.includes(namer) ? this.addSelectedIndicator(namer) : this.removeSelectedIndicator(namer));
  }

  handleMatrixSubmit(event) {
    event.preventDefault();
    this.setState({
      matrixSwitch: 1
    });
  }

  renderMatrix(){
    if (this.state.matrixSwitch) {
      return <CorrMatrix indicatorList={this.state.selectedIndicators} />
    }
  }

  // <form onSubmit={this.handleSubmit}>
  render(){
    return(
      <div>
        <form>
          <ul className="list-column">
            <li><label><input type="checkbox" name="Population" onChange={e => this.handleCheckboxChange(e.target.name)} /> Population</label></li>
            <li><label><input type="checkbox" name="Population Growth %" onChange={e => this.handleCheckboxChange(e.target.name)} /> Population Growth(%)</label></li>
            {/* <li><label><input type="checkbox" name="popDensity" onChange={e => this.handleCheckboxChange(e.target.name)} /> Population Density(/km²)</label></li> */}
            <li><label><input type="checkbox" name="GDP" onChange={e => this.handleCheckboxChange(e.target.name)} /> GDP</label></li>
            {/* <li><label><input type="checkbox" name="gdpGrowthPercent" onChange={e => this.handleCheckboxChange(e.target.name)} /> GDP growth(%)</label></li> */}
            <li><label><input type="checkbox" name="Per Capita" onChange={e => this.handleCheckboxChange(e.target.name)} /> Per Capita</label></li>
            {/* <li><label><input type="checkbox" name="debt" onChange={e => this.handleCheckboxChange(e.target.name)} /> Country Debt</label></li> */}
          </ul>
          <ul className="list-column">
            {/* <li><label><input type="checkbox" name="deficitPrev" onChange={e => this.handleCheckboxChange(e.target.name)} /> Deficit (% prev)</label></li> */}
            {/* <li><label><input type="checkbox" name="deficitGdp" onChange={e => this.handleCheckboxChange(e.target.name)} /> Deficit (% GDP)</label></li> */}
            <li><label><input type="checkbox" name="Unemployment" onChange={e => this.handleCheckboxChange(e.target.name)} /> Unemployment (%)</label></li>
            <li><label><input type="checkbox" name="Birth Rate" onChange={e => this.handleCheckboxChange(e.target.name)} /> Birth Rate per 1000</label></li>
            <li><label><input type="checkbox" name="Death Rate" onChange={e => this.handleCheckboxChange(e.target.name)} /> Death Rate per 1000</label></li>
            <li><label><input type="checkbox" name="Life Expectency" onChange={e => this.handleCheckboxChange(e.target.name)} /> Life Expectency</label></li>
            {/* <li><label><input type="checkbox" name="Trade Balance" onChange={e => this.handleCheckboxChange(e.target.name)} /> Trade Balance</label></li> */}
          </ul>
          <br/>
          <button type="submit" onClick={e => {this.handleMatrixSubmit(e)}} > Submit </button>
        </form>
        {this.renderMatrix()}
      </div>
    )
  }

}
