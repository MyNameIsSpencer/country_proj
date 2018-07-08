import React, { Component } from 'react';
import axios from 'axios';


export default class WorldBank extends Component {
  state = {
    info: null,
    popper: "0"
  }

  componentDidMount() {
    axios.get(`
      http://api.worldbank.org/v2/countries/wld/indicators/SP.POP.TOTL?format=json
      `)
    .then(res => {
      this.setState({ info: res.data });
      this.setState({ popper: res.data[1][0].value });
      console.log(this.state.popper);

    });
  }

  render(){
    return(
      <div>
        <h1>WorldBank Stuuufufufuf</h1>
        <h2>{ this.state.popper }</h2>
        {/* {this.state.info.data[0]} */}
      </div>
    )
  }
}



// axios.get(`http://api.worldbank.org/v2/`)
// http://api.worldbank.org/v2/datacatalog
// http://api.worldbank.org/v2/datacatalog?format=json
// 2,055,505,502,224.73