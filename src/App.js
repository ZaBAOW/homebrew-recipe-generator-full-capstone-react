import React, { Component } from 'react';

import {connect} from 'react-redux';

import Landing from './components/landing-page';
import Login from './components/login';
import Signup form './components/signup';
import Nav from './components/nav';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Browser from './components/browser';
import Result from './components/browser-result';
import Creator from './components/breww-creator';
import Viewer from './components/brew-viewer';
import Archive from './components/your-brew';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Route exact path="/dashboard/user" render={() => <Welcome person={this.props.loggedIn} />} />
                    <header>
                        <h1><Link to="/">Homebrew generator</Link></h1>
                        <Route exact path="/dashboard/user" component={nav} />
                    </header>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/auth/signup" component={Signup} />
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/dashboard/archive" component={Archive} />
                    <Route exact path="/nav/dashboard" component={Nav} />
                    <Route exact path="/nav/dashboard" component={Nav} />
                    <Route exact path="/nav/browse" component={Nav} />
                    <Route exact path="/browser/view" component={Browser} />
                    <Route exact path="/nav/dashboard" component={Nav} />
                    <Route exact path="/nav/logout" component={Nav} />
                    <Route exact path="/nav/dashboard" component={Nav} />
                    <Route exact path="/nav/signup" component={Nav} />
                    <Route exact path="/nav/login" component={Nav} />
                    <Route exact path="/" component={Footer} />
                    <Route exact path="/dashboard/create" component={Dashboard} />
                </div>
            </Router>
        )
    }
}

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error
});

export default connect(mapStateToProps)(App);