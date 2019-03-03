import React, { Component } from 'react';

import {connect} from 'react-redux';
//import {Route, withRouter} from 'react-router-dom';

import Landing from './components/landing-page';
import Login from './components/login';
import Signup from './components/signup';
import NotLoggedNav from './components/notLoggedNav';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Browser from './components/browser';
import Result from './components/browser-result';
import Creator from './components/brew-creator';
import Viewer from './components/brew-viewer';
//import Archive from './components/your-brew';
import Welcome from './components/welcome';
import {refreshAuthToken} from './actions/index';
import LoggedNav from './components/loggedNav';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

export class App extends Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }
    
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }
    
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000
        );
    }
    
    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }
        clearInterval(this.refreshInterval);
    }
    
    render() {
        return (
            <Router>
                <div className='container'>
                    <Route exact path="/dashboard/user" render={() => <Welcome person={this.props.loggedIn} />} />
                    <header>
                        <h1><Link to="/">Homebrew generator</Link></h1>
                        
                    </header>
                    <NotLoggedNav />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/users" component={Signup} />
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/browser" component={Browser} />
                    <Route exact path="/dashboard/create" component={Dashboard} />
                    <Footer />
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