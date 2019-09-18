import React from 'react';


export default class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    
    onSubmit(e) {
        e.preventDefault();
        const keyword = this.textInput.value.trim();
        if (keyword) {
            this.props.onSearch(keyword);
        }
        this.textInput.value = "";
    }
    
    render() {
        return (
          <form className="search-brew" onSubmit={this.onSubmit}>
             <div className="search-bar text-center">
              <input type="text" className="searchInput" id="searchbar" placeholder="search input goes here" ref={input => (this.textInput = input)} />
              <button className="search">Search</button>
              <span className="tooltip" aria-label="hint" role="img">&#10068;
                    <span className="tooltiptext tooltip-bottom">Search for a brew recipe either by inputting part of or the entire name of a brew.  The more specific the search the more accurate the search results will be.  The browser is caps sensitive so make sure to use correctly capatalize the search input. Use the term "Test" for demo purposes</span>
              </span>
            </div>
          </form>
        );
    }
}