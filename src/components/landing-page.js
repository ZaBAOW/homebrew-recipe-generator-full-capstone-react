import React from 'react';

import Signup from './signup';

export default function Landing() {
    return(
      <div className="landing-page">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="color-primary-5">Welcome to the Homebrew Generator</h1>
                <h2 className="color-primary-5">The What!?</h2>
                <p className="color-primary-5">The Homebrew Generator is a tool that allows homebrewers like YOU and
                  many others that participate in the hobby of homebrewing to create and
                  share recipes with one another.
                  etc...</p>
              </div>
              <div className="col-md-6">
                <Signup />
              </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 color-primary-5">
                <h1>What is needed for a homebrew recipe</h1>
                <p>name and measurements of your ingredients along with schedule specifics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 color-primary-5">
                <h1>Browse HUNDREDS of homebrew recipes</h1>
                <p>Explore the brew recipe database created by other users and hombrewers like you.  Find a recipe you find intriguing and try it out yourself.</p>
              </div>
            </div>
          </div>
        </div>
       </div>
    )
};