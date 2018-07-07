import React, { Component } from 'react';
import axios from 'axios';


export default class WorldBank extends Component {


  componentDidMount() {
    axios.get(`http://api.worldbank.org/v2/countries/br/indicators/NY.GDP.MKTP.CD?date=2006`)

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
