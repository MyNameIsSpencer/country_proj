import React, { Component } from 'react';
import '../CSS/GlobalAnalytics.css';


export default class GlobalAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndicators: []
    }
  }

  render(){
    return(
      <div>
        <form>
          <ul className="list-column">
            <li><label><input type="checkbox" /> Population</label></li>
            <li><label><input type="checkbox" /> Population Grwoth(%)</label></li>
            <li><label><input type="checkbox" /> Population Density(/km²)</label></li>
            <li><label><input type="checkbox" /> GDP</label></li>
            <li><label><input type="checkbox" /> GDP growth(%)</label></li>
            <li><label><input type="checkbox" /> Per Capita</label></li>
            <li><label><input type="checkbox" /> Country Debt</label></li>
          </ul>
          <ul className="list-column">
            <li><label><input type="checkbox" /> Deficit (% prev)</label></li>
            <li><label><input type="checkbox" /> Deficit (% GDP)</label></li>
            <li><label><input type="checkbox" /> Unemployment (%)</label></li>
            <li><label><input type="checkbox" /> Birth Rate per 1000</label></li>
            <li><label><input type="checkbox" /> Death Rate per 1000</label></li>
            <li><label><input type="checkbox" /> Life Expectency</label></li>
            <li><label><input type="checkbox" /> Trade Balance</label></li>
          </ul>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    )
  }

}
