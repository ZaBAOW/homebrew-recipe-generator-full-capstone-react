import React from 'react';
//import './footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="section section-primary color-bgsecondary-2-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="color-secondary-2-4">Footer header</h1>
                    <p className="color-secondary-2-4">This is the page footer</p>
              </div>
              <div className="col-sm-6">
                <p className="text-info text-right">
                  <br />
                  <br />
                </p>
                <div className="row">
                  <div className="col-md-12 hidden-lg hidden-md hidden-sm text-left">
                    <Link to="#"><i className="fa fa-3x fa-fw fa-instagram text-inverse"></i></Link>
                    <Link to="#"><i className="fa fa-3x fa-fw fa-twitter text-inverse"></i></Link>
                    <Link to="#"><i className="fa fa-3x fa-fw fa-facebook text-inverse"></i></Link>
                    <Link to="#"><i className="fa fa-3x fa-fw fa-github text-inverse"></i></Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 hidden-xs text-right">
                    <Link to="#"><i className="fa fa-3x fa-fw fa-instagram text-inverse"></i></Link>
                    <Link to="#"><i className="fa fa-3x fa-fw fa-twitter text-inverse"></i></Link>
                    <Link to="#"><i className="fa fa-3x fa-fw fa-facebook text-inverse"></i></Link>
                    <Link to="#"><i className="fa fa-3x fa-fw fa-github text-inverse"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}