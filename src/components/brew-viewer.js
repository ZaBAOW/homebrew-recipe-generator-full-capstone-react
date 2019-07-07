import React from 'react';
import { connect } from "react-redux";

export default function ViewBrew(props) {
    return (
        <div id= {props.id} className="recipeView color-bgsecondary-1-1">
            <div className="abv" value={props.recipe.brews}></div>
            <div className="hopsName">Hops type: {props.recipe.hopsName}</div>
            <div className="hopsMeasure-view">Measurement: {props.recipe.hopsMeasure}</div>
            <div className="maltName">Malt Type: {props.recipe.maltName}</div>
            <div className="maltMeasure-view">Measurement: {props.recipe.maltMeasure}</div>
            <div className="yeastName">Yeast Type: {props.recipe.yeastName}</div>
            <div className="yeastMeasure-view" >Measurement:{props.recipe.yeastMeasure}</div>
            <div className="yeastSchedule-view">Yeast Schedule: <p>{props.recipe.yeastSchedule}</p></div>
            <div className="mashSchedule">Mash Schedule:<p> {props.recipe.mashSchedule}</p></div>
        </div>
    )
}