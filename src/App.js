import {
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import Countries from './Components/Countries';
import './CSS/App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     countryNumber: 0,
  //     selectedCountries: [],
  //   }
  //   this.addToSelectedCountries = this.addToSelectedCountries.bind(this);
  //   // this.renderCountries = this.renderCountries.bind(this);    <<<  don't need???
  //   this.appLogger = this.appLogger.bind(this);
  //   this.oneCountry = this.oneCountry.bind(this);
  //  }


  render() {
    return (
      <div className="App">
        <Countries />
        {/* <SearchBar oneCountry={this.oneCountry}/> */}
        {/* <div className="header-navigation">
          <Route exact path="/"component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/fittips" component={FitTips} />
        </div> */}
      </div>
    );
  }
}

export default App;
