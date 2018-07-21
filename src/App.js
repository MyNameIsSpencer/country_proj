import {
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import Countries from './Components/Countries';
import GlobalAnalytics from './Components/GlobalAnalytics';
import Header from './Components/Header';
import './CSS/App.css';

class App extends Component {
  // <Route path="/services" component={Services} />
  // <Route path="/about" component={About} />
  // <Route path="/fittips" component={FitTips} />



  render() {
    return (
      <div className="App">
      <Header />
        <div className="header-navigation">
          <Route exact path="/"component={Countries} />
          <Route path="/globalanalytics" component={GlobalAnalytics} />
        </div>
      </div>
    );
  }
}

export default App;
