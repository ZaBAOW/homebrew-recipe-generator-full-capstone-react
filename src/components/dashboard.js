import React from 'react';
import verifyLogin from './login-verification';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Background from '../images/Malt_en_grain.JPG';

var sectionStyle = {
    backgroundImage: `url(${Background})`
}

export function Dashboard(props) {
    return (
        <div className="dashboard-section" style={sectionStyle}>
          <div className="grid-container-dashboard">
              <div className="grid-item dash-desc">
                <p>Welcome to your Homebrew Dashboard. From here you can do one of two things. First you can choose to "Create a Recipe" where you can submit your own homebrew recipes to the website. Secondly, you can view any recipes you have already submitted to the site and choose to either edit or delete them.</p>
              </div>
              <div className="grid-item dash-select">
                <div className="dashSelect">
                  <Link to="/dashboard/create">Create a Recipe</Link>
                  <Link to="dashboard/archive">View your existing Recipes</Link>
                </div>
              </div>
          </div>
        </div>
    )
}

export const mapStateToProps = state => ({
    authToken: state.authToken,
    userID: state.userId
})

export default verifyLogin()(connect(mapStateToProps)(Dashboard));