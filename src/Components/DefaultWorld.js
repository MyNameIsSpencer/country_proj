import React, { Component } from 'react';
import axios from 'axios';


export default class WorldBank extends Component {


  componentDidMount() {
    axios.get(`
      http://api.worldbank.org/v2/countries/wld/indicators/SP.POP.TOTL?format=json
      `)
    .then(res => {
      console.log(res);
    })
  }

  render(){
    return(
      <div>


      </div>
    )
  }
}



// axios.get(`http://api.worldbank.org/v2/`)
// http://api.worldbank.org/v2/datacatalog
// http://api.worldbank.org/v2/datacatalog?format=json
// 2,055,505,502,224.73
