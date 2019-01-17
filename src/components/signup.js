import React from 'react';
import '../index.css';

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
        // switch over to login form
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        return(
            <form className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-2">
                  <label htmlFor="inputEmail3" className="control-label">Email</label>
                </div>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-2">
                  <label for="inputPassword3" className="control-label">Password</label>
                </div>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Sign Up</button>
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

export default connect(mapStateToProps)(signupUser);