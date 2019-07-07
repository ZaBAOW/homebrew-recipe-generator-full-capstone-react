import React from "react";
import Nav from "./Nav";
import Browser from "./browser";
import Brews from "./brews";
import $ from 'jquery';

import { connect } from "react-redux";
import { browseBrews} from "../actions";
import { clearDropdown } from "../custom";
import { findDOMNode } from 'react-dom';

export class BrowserPage extends React.Component {
  // Clear the videos list if moving between pages
//  componentDidMount() {
//    clearDropdown(this.refs.brews, this.props.dispatch);
//  }

  componentWillUnmount() {
    clearDropdown(this.refs.brews, this.props.dispatch);
  }

  onSearch(keyword) {
    this.props.dispatch(browseBrews(keyword));
  }
    
  handleHide = () => {
        $('.toggleSection').attr('style', 'display: none');
  }

  render() {
    return (
      <div>
        <section className="form-search">
          <h2 class="browser-page-header color-primary-5">Search</h2>
          <Browser
            placeholder="Search by brew name"
            onSearch={keyword => this.onSearch(keyword)}
          />
          <div className="brew-outer" ref="brews">
            <Brews />
          </div>
        </section>
        <button className='hide-all' onClick={() => this.handleHide()}>Hide Recipes</button>
        <span className="tooltip">&#10068;
                <span className="tooltiptext tooltip-bottom">click this button to close any and all open recipes</span>
            </span>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateToProps)(BrowserPage);