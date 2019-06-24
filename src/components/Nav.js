import React from 'react';
import { connect } from "react-redux";
import { logOut, logoutUser } from "../actions";
//import './nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    logOut() {
        console.log(this.props.user);
        this.props.dispatch(logoutUser(this.props.user));
        this.props.dispatch(logOut());
    }
    
    
    render() {
        if(this.props.loggedIn) {
            return (
                <div className="navbar navbar-default navbar-static-top">
                  <div className="container">
                    <div className="navbar-header">
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                      <a href="/">Homebrew generator</a>
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <Link to="/browser" className="browser-link">Browse</Link>
                        </li>
                        <li>
                          <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
                        </li>
                        <Link to="/auth/login" className="logoutButton" onClick={() => this.logOut()}>Logout</Link>
                      </ul>
                    </div>
                  </div>
              </div> 
            )
        }
    
        if(!this.props.loggedIn) {
            return (
                <div className="navbar navbar-default navbar-static-top">
                  <div className="container">
                    <div className="navbar-header">
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <Link to="/browser">Browse</Link>
                        </li>
                        <li>
                          <Link to="/auth/login">Login</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div> 
            )
        }
    }
}

export const mapStateToProps = state => ({
    loggedIn: state.user,
    user: state.user,
    error: state.error
});

export default connect(mapStateToProps)(Nav);
