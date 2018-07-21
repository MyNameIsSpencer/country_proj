
import React, { Component } from 'react';
import axios from 'axios';


export default class CorrMatrix extends Component {



  getPractice() {
    axios.get(`http://api.worldbank.org/v2/countries/wld/indicators/SP.POP.TOTL?format=json`)
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return(
      <div>
        {this.getPractice()}
      </div>
    )
  }

}
