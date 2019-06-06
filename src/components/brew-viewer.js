import React from 'react';
import { connect } from "react-redux";

export default function ViewBrew(props) {
    return (
        <div id= {props.id} className="recipeView" display="none">
            <div className="abv" value={props.recipe.brews}></div>
            <div className="hopsName">Hops type: {props.recipe.hopsName}</div>
            <div className="hopsMeasure">Measurement: {props.recipe.hopsMeasure}</div>
            <div className="maltName">Malt Type: {props.recipe.maltName}</div>
            <div className="maltMeasure">Measurement: {props.recipe.maltMeasure}</div>
            <div className="yeastName">Yeast Type: {props.recipe.yeastName}</div>
            <div className="yeastMeasure" >Measurement:{props.recipe.yeastMeasure}</div>
            <div className="yeastSchedule">Yeast Schedule: {props.recipe.yeastSchedule}</div>
            <div className="mashSchedule">Mash Schedule: {props.recipe.mashSchedule}</div>
        </div>
    )
}