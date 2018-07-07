import React, { Component } from 'react';
import axios from 'axios';


export default class Pop1 extends Component {


  componentDidMount() {
    axios.get(`http://api.population.io:80/1.0/population/Brazil/18/`)
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
