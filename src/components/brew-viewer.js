import React from 'react';
import { connect } from "react-redux";

export default function viewBrew(props) {
    return (
        <div className="recipe">
            <div className="abv" value={this.props.abv}></div>
            <div className="abv" value={this.props.hopsName}></div>
            <div className="abv" value={this.props.hopsMeasure}></div>
            <div className="abv" value={this.props.maltName}></div>
        
        </div>
    )
}