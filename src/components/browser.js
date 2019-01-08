import React from 'react';
import './browser.css';
import './browser-result';

epxort class Browser extends React.Component {
    onSearch(keyword) {
        this.props.dispatch(browseBrews(keyword, this.props.authToken))
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