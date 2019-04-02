import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "react-spinkit";

// Component can be any component with the adopted redirect behavior

export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error } = props;
    let spinner;
    if (authenticating) {
      spinner = (
        <div className="spinner-container">
          <Spinner className="spinner" name="circle" />
        </div>
      );
      return <Component spinner={spinner} />;
    } else if (!loggedIn || error) {
      return <Redirect to="/auth/login" />;
    }

    return <Component />;
  }

  const mapStateToProps = state => ({
    authenticating: state.loading,
    loggedIn: state.user,
    error: state.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};