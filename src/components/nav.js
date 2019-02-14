import React from 'react';
//import './nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/landing-page">{props.brand}</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-ex-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/browser">Browse</Link>
                </li>
                <li>
                  <button>Login</button>
                </li>
              </ul>
            </div>
          </div>
      </div> 
    )
}

Nav.defaultProps = {
    brand: 'Homebrew Generator'
};