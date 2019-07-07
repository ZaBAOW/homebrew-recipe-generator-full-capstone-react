import React from 'react';
//import './landing-page.css';
import {reduxForm, Field, focus} from 'redux-form';
import { Link, Redirect } from  "react-router-dom";
import { connect } from "react-redux";
import {loginUser, logoutUser} from '../actions';

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
//        this.props.dispatch(logoutUser(user.username));
        console.log('user that was logged in: ', this.props.user);
        // if succesful, change nav links
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        
        return(
            <form className="form-horizontal" id='login-form' role="form" onSubmit={this.onSubmit}>
              <h2 className="login-head color-primary-5">Login</h2>
              <label htmlFor="inputEmail3" className="control-label color-primary-5">Username</label>
              <input type="username" className="form-control" id="inputUsername" placeholder="myUsername" ref={input => (this.username = input)}></input>
              <label htmlFor="inputPassword3" className="control-label color-primary-5" >Password</label>
              <input type="password" className="form-control" id="loginPassword3" placeholder="myPassword" ref={input => (this.password = input)}></input>
              <button type="submit" className="login-btn">Log In</button>
            </form>
        )
    }
}
//
//export default reduxForm({
//    form: 'login',
//    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
//})(Login);

export const mapStateToProps = state => ({
    loggedIn: state.user,
    error: state.error
});

export default connect(mapStateToProps)(Login);