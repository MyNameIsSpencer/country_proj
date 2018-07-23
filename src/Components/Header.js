import {
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import '../CSS/Header.css';

class Header extends Component {
  render() {
    return(
      <div className="header-div" >
        <nav className="nav-header">
          <Link to="/" className="link-item">Country</Link>
          <Link to="/globalanalytics" className="link-item">Global</Link>
        </nav>
      </div>
    )
  }


}

export default Header;
