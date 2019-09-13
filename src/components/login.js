import React from 'react';
import { Redirect } from  "react-router-dom";
import { connect } from "react-redux";
import {loginUser} from '../actions';

export class Login extends React.Component {
      constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

    onSubmit(e, state) {
        e.preventDefault();
        console.log('attempting to log you in...');
        const inputs = [this.username, this.password];
        console.log('inputs:', inputs);
        const user = {
          username: this.username.value,
          password: this.password.value
        };
        console.log('user:', user);
        this.props.dispatch(loginUser(user));
        // if succesful, change nav links
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        
        return(
            <form className="form-horizontal" id='login-form' onSubmit={this.onSubmit}>
              <span className="tooltip" aria-label="hint" role="img">&#10068;
                <span className="tooltiptext tooltip-bottom">For demo use username: heroku account,  and password: willyb1234</span>
              </span>
              <h2 className="login-head color-primary-5">Login</h2>
              <label htmlFor="loginUsername" className="control-label color-primary-5">Username</label>
              <input type="username" className="form-control" id="loginUsername" placeholder="myUsername" ref={input => (this.username = input)}></input>
              <label htmlFor="loginPassword" className="control-label color-primary-5" >Password</label>
              <input type="password" className="form-control" id="loginPassword" placeholder="myPassword" ref={input => (this.password = input)}></input>
              <button type="submit" className="login-btn">Log In</button>
            </form>
        )
    }
}

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error
});

export default connect(mapStateToProps)(Login);