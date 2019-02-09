import React from 'react';
//import './dashboard.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Dashboard(props) {
    return (
        <div class="dashboard-section">
          <div class="grid-container">
              <div class="grid-item dash-desc">
                <p>Welcome to your Homebrew Dashboard. From here you can do one of two things. First you can choose to "Create a Recipe" where you can submit your own homebrew recipes to the website. Secondly, you can view any recipes you have already submitted to the site and choose to either edit or delete them.</p>
              </div>
              <div class="grid-item dash-select">
                <div class="dashSelect">
                  <Link to="/brew-creator">Create a Recipe</Link>
                  <Link to="/your-brews">View your existing Recipes</Link>
                </div>
              </div>
          </div>
        </div>
    )
}