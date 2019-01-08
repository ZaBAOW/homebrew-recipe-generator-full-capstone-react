import React from 'react';
import './landing-page.css';
import Signup from './signup';

export default function Landing(props) {
    return(
        <div class="section">ls
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>Welcome to the Homebrew Generator</h1>
                <h3>The What!?</h3>
                <p>The Homebrew Generator is a tool that allows homebrewers like YOU and
                  many others that participate in the hobby of homebrewing to create and
                  share recipes with one another.
                  <br>etc...</p>
              </div>
              <div class="col-md-6">
                <Signup />
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>What is needed for a homebrew recipe</h1>
                <p>talking ablut what is needed for a recipe</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>Browse HUNDREDS of homebrew recipes</h1>
                <p>talk about the homebrew browsing system.</p>
              </div>
            </div>
          </div>
        </div>
    )
} 