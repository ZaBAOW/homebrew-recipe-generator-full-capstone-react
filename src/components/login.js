import React from 'react';
//import './landing-page.css';
import {reduxForm, Field, focus} from 'redux-form';
import { Link, Redirect } from  "react-router-dom";
import { connect } from "react-redux";
import {loginUser} from '../actions';

export class Login extends React.Component {
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
        this.props.dispatch(loginUser(user));
        // if succesful, change nav links
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        
        return(
            <form className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-2">
                  <label htmlFor="inputEmail3" className="control-label">Email</label>
                </div>
                <div className="col-sm-10">
                  <input type="username" className="form-control" id="inputUsername" placeholder="Username"></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-2">
                  <label htmlFor="inputPassword3" className="control-label">Password</label>
                </div>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="loginPassword3" placeholder="Password"></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Log In</button>
                </div>
              </div>
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