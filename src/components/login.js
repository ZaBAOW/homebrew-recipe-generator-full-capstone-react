import React from 'react';
import './landing-page.css';
import {reduxForm} from 'redux-form';
import {loginUser} from '../actions/index';

export class Login extends React.Component() {
    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.username, this.password];
        const user = {
          username: this.username.value,
          password: this.password.value
        };
        this.props.dispatch(loginUser(user));
        // if succesful, change nav links
        inputs.map(input => (input.value = ""));
        // redirects to dashboard
    }
    
    render() {
        return(
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <div class="col-sm-2">
                  <label htmlFor="inputEmail3" class="control-label">Email</label>
                </div>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-2">
                  <label for="inputPassword3" class="control-label">Password</label>
                </div>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">Log In</button>
                </div>
              </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(loginForm);