import React from "react";
import Nav from "./Nav";
import Browser from "./browser";
import Brews from "./brews";

import { connect } from "react-redux";
import { browseBrews} from "../actions";
import { clearDropdown } from "../custom";

export class BrowserPage extends React.Component {
  // Clear the videos list if moving between pages
  componentDidMount() {
    clearDropdown(this.refs.brews, this.props.dispatch);
  }

  componentWillUnmount() {
    clearDropdown(this.refs.brews, this.props.dispatch);
  }

  onSearch(keyword) {
    this.props.dispatch(browseBrews(keyword));
  }

  render() {
    return (
      <div>
        <section className="form-search">
          <h2>Search</h2>
          <Browser
            placeholder="Search by brew name"
            onSearch={keyword => this.onSearch(keyword)}
          />
          <div className="brew-outer" ref="brews">
            <Brews />
          </div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateToProps)(BrowserPage);