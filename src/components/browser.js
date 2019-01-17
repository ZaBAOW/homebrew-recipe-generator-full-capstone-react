import React from 'react';
import './browser.css';
import './browser-result';

import { connect } from 'react-redux';
import { browseBrews } from '../actions/index';

epxort class Browser extends React.Component {
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
             <div class="search-bar text-center">
              <input type="text" class="searchInput" placeholder="type keywords to search for a brew">
              <button class="search">Search</button>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateProps)(Browser);