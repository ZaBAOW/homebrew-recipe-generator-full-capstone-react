import React from 'react';
import './landing-page.css';

export class Signup extends React.Component() {
    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.username, this.password];
        const user = {
          username: this.username.value,
          password: this.password.value
        };
        this.props.dispatch(signup(user));
        inputs.map(input => (input.value = ""));
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
                  <button type="submit" class="btn btn-default">Sign Up</button>
                </div>
              </div>
            </form>
        )
    }
}