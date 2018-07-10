import React, { Component } from 'react';
import axios from 'axios';


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


export default class WorldBank extends Component {
  state = {
    info: null,
    popper: "0"
  }

  componentDidMount() {
    let coder = this.props.code;
    axios.get(`http://api.worldbank.org/v2/countries/${coder}/indicators/SP.POP.TOTL?format=json`)
    .then(res => {
      this.setState({ info: res.data });
      this.setState({ popper: res.data[1][0].value });
      console.log(this.state.popper);

    });
  }

  render(){
    return(
      <div>
        <h2>{ this.props.name } Population Last Year</h2>
        <h2>{ addCommas(this.state.popper) }</h2>
      </div>
    )
  }
}



// axios.get(`http://api.worldbank.org/v2/`)
// http://api.worldbank.org/v2/datacatalog
// http://api.worldbank.org/v2/datacatalog?format=json
// 2,055,505,502,224.73
