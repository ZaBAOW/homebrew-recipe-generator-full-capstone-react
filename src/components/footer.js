import React from 'react';
//import './footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer class="section section-primary">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h1>Footer header</h1>
                    <p>This is the page footer</p>
              </div>
              <div class="col-sm-6">
                <p class="text-info text-right">
                  <br />
                  <br />
                </p>
                <div class="row">
                  <div class="col-md-12 hidden-lg hidden-md hidden-sm text-left">
                    <Link to="#"><i class="fa fa-3x fa-fw fa-instagram text-inverse"></i></Link>
                    <Link to="#"><i class="fa fa-3x fa-fw fa-twitter text-inverse"></i></Link>
                    <Link to="#"><i class="fa fa-3x fa-fw fa-facebook text-inverse"></i></Link>
                    <Link to="#"><i class="fa fa-3x fa-fw fa-github text-inverse"></i></Link>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 hidden-xs text-right">
                    <Link to="#"><i class="fa fa-3x fa-fw fa-instagram text-inverse"></i></Link>
                    <Link to="#"><i class="fa fa-3x fa-fw fa-twitter text-inverse"></i></Link>
                    <Link to="#"><i class="fa fa-3x fa-fw fa-facebook text-inverse"></i></Link>
                    <Link to="#"><i class="fa fa-3x fa-fw fa-github text-inverse"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}