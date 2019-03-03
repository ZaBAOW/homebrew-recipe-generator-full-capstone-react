import React from 'react';
//import './browser.css';
import './browser-result';
//import Nav from './notLoggedNav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { browseBrews } from '../actions/index';
import { clearDropdown } from '../custom';

export class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        console.log(this.textInput.value.trim());
        const keyword = this.textInput.value.trim();
        console.log('keyword recieved');
        if (keyword) {
            console.log('keyword: ', keyword);
            this.props.dispatch(browseBrews(keyword));
        }
    }
    
//    componentDidMount() {
//        clearDropdown(this.ref.brews, this.props.dispatch);
//    }
//    
//    componentWillUnmount() {
//        clearDropdown(this.ref.brews, this.props.dispatch);
//    }
    
    render() {
        return (
          <form className="search-brew" onSubmit={this.onSubmit}>
             <div className="search-bar text-center">
              <input type="text" className="searchInput" placeholder="type keywords to search for a brew" ref={input => (this.textInput = input)} />
              <button className="search">Search</button>
            </div>
          </form>
        )
    }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateToProps)(Browser);