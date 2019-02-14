import React from 'react';
//import './browser.css';
import './browser-result';
import Nav from './nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { browseBrews } from '../actions/index';
import { clearDropdown } from '../custom';

export class Browser extends React.Component {
    onSearch(keyword) {
        this.props.dispatch(browseBrews(keyword))
    }
    
    componendDidMount() {
        clearDropdown(this.ref.brews, this.props.dispatch);
    }
    
    componentWillUnmount() {
        clearDropdown(this.refs.brews, this.props.dispatch);
    }
    
    render() {
        return (
             <div className="search-bar text-center">
              <input type="text" className="searchInput" placeholder="type keywords to search for a brew"></input>
              <button className="search">Search</button>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateToProps)(Browser);