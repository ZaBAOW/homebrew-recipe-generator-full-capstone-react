import React from 'react';

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../actions/index";

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.username, this.password];
        const user = {
          username: this.username.value,
          password: this.password.value
        };
        this.props.dispatch(signupUser(user));
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        return(
            <form className="form-horizontal sign-up" aria-label="signup form" role="form" onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label htmlFor="inputEmail3" className="control-label color-primary-5">Username</label>
                  <input type="username" className="form-control" id="signupUsername" placeholder="Username" ref={input => (this.username = input)}></input>
              </div>
              <div className="form-group">
                  <label htmlFor="inputPassword3" className="control-label color-primary-5">Password</label>
                  <input type="password" className="form-control" id="signupPassword" placeholder="Password" ref={input => (this.password = input)}></input>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="signup-btn" onClick={ this._toggleFormState}>Sign Up</button>
                </div>
              </div>
            </form>
        )
    }
}

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error
});


export default connect(mapStateToProps)(Signup);