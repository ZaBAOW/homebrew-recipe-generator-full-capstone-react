import React from 'react';
import './browser.css';

epxort class Browser extends React.Component {
    render() {
        return (
             <div class="search-bar text-center">
              <input type="text" class="searchInput" placeholder="type keywords to search for a brew">
              <button class="search">Search</button>
            </div>
        )
    }
}