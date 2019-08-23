import React from 'react';
import { connect } from "react-redux";
import { logOut, logoutUser } from "../actions";
import Logo from '../images/homebrew-generator-logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    logOut() {
        console.log(this.props.user);
        console.log(this.props.loggedIn);
        this.props.dispatch(logoutUser(this.props.user));
        this.props.dispatch(logOut());
    }
    
    
    render() {
        if(this.props.loggedIn || this.props.loggedIn != null) {
            return (
                <div role="navigation" className="navbar navbar-default navbar-static-top color-bgprimary-2">
                  <div className="container">
                    <div className="navbar-header">
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                      <img src={Logo} role="img" alt="homebrew logo" className='logo'></img>
                      <a href="/" className='home-link'>Homebrew generator</a>
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <Link to="/browser" role="link" className="browser-link">Browse</Link>
                        </li>
                        <li>
                          <Link to="/dashboard" role="link" className="dashboard-link">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/auth/login" role="link" className="logoutButton" onClick={() => this.logOut()}>Logout</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div> 
            )
        }
    
        if(!this.props.loggedIn) {
            return (
                <div className="navbar navbar-default navbar-static-top color-bgprimary-2">
                  <div className="container">
                    <div className="navbar-header">
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                      <img src={Logo} role="img" alt="homebrew logo" className='logo'></img>
                      <a href="/"  role="link" className='home-link color-primary-4'>Homebrew generator</a>
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <Link to="/browser" role="link" className='browser-link color-primary-4'>Browse</Link>
                        </li>
                        <li>
                          <Link to="/auth/login" role="link" className='login-link color-primary-4'>Login</Link>
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
