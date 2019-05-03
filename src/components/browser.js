import React from 'react';
//import './browser.css';
import Results from './browser-result';
import store from '../store';
//import Nav from './notLoggedNav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { browseBrews, selectBrew } from '../actions/index';
import { clearDropdown } from '../custom';

export default class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    
    onSubmit(e) {
        e.preventDefault();
        const keyword = this.textInput.value.trim();
        console.log('keyword recieved');
        if (keyword) {
            this.props.onSearch(keyword);
        }
        this.textInput.value = "";
    }
    
    render() {
        return (
          <form className="search-brew" onSubmit={this.onSubmit}>
             <div className="search-bar text-center">
              <input type="text" className="searchInput" placeholder="type keywords to search for a brew" ref={input => (this.textInput = input)} />
              <button className="search">Search</button>
            </div>
          </form>
        );
    }
}