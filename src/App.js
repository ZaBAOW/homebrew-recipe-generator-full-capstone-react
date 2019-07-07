import React, { Component } from 'react';

import {connect} from 'react-redux';
import store from './store';

import Landing from './components/landing-page';
import Login from './components/login';
import Signup from './components/signup';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import BrowserPage from './components/browser-page';
import Result from './components/browser-result';
import Creator from './components/brew-creator';
import Viewer from './components/brew-viewer';
import Archive from './components/your-brew';
import Welcome from './components/welcome';
import {refreshAuthToken} from './actions/index';
import Nav from './components/Nav';

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
    
    checkLoggedStatus(props) {
        if(this.props.loggedIn) {
            //render LoggedNav
        }
        if(!this.props.loggedIn) {
            // render NotLoggedNav
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
                <div className='root-container color-bgprimary-5'>
                    <Route exact path="/dashboard/user" render={() => <Welcome person={this.props.loggedIn} />} />
                    <header>
                        
                    </header>
                    <Nav />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/users" component={Signup} />
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/browser" component={BrowserPage} />
                    <Route exact path="/dashboard/create" component={Creator} />
                    <Route exact path="/dashboard/archive" component={Archive}/>
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