import React from "react";
import { connect } from "react-redux";
import $ from 'jquery';
import { viewRecipe } from "../actions";
import ViewBrew from './brew-viewer';

export class Yourbrews extends React.Component {

    constructor () {
        super()
        this.state = {
            archiveBrews: []
        }
    }
    
    handleId(id) {
        const brewId = id;
        this.props.dispatch(viewRecipe(brewId));
    }

    
    handleToolTip = (index, id, brewName) => {
        $('.toggleSection').attr('style', 'display: none');
        this.handleId(id);
        $('#' + brewName).attr('style', 'dipslay: inline-block');
    }
    
  render() {
      
    let resultsList = [];
    // for rendering search list
    console.log(this.props.archiveBrews);
    if(this.props.archiveBrews === undefined) {
        console.log('brew prop is undefined')
    } else if (this.props.archiveBrews.length === 0) {
      console.log('brew prop is null')
      console.log(this.props.archiveBrews.length);
    } else {
      console.log('archiveBrews length is not 0!');
      console.log('archiveBrews length: ', this.props.archiveBrews[0].results);
      resultsList = this.props.archiveBrews[0].results.map((brew, index) => {
        const brewId = brew._id;
        console.log(brewId);
        const brewName = brew.brewName;
        const recipeTemplate =  <ViewBrew recipe = {this.props} id = {brewId} />
        return (
          <div className="brewItem color-bgsecondary-1-2" ref={brewId} key={index}>
            <h2>Brew Name: {brewName}</h2>
            <h3>%abv: {brew.abv}</h3>
            <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
            <button type='button' className="view-button" onClick={() => {this.handleToolTip(index,brewId, brewName)}}>View Recipe</button>
            <div style={{display: 'none'}} id={brewName} className="toggleSection">
                {recipeTemplate}
            </div>
          </div>
        );
      });
    }
    return (
        <div className="results-list">{resultsList}</div>
    );
  }
}

export const mapStateToProps = state => ({
  archiveBrews: state.archiveBrews,
  brewName: state.brewName,
  maltName: state.maltName,
  maltMeasure: state.maltMeasure,
  hopsName: state.hopsName,
  hopsMeasure: state.hopsMeasure,
  yeastName: state.yeastName,
  yeastMeasure: state.yeastMeasure,
  yeastSchedule: state.yeastSchedule,
  mashSchedule: state.mashSchedule,
  loading: state.loading,
  items: state.items
});

export default connect(mapStateToProps)(Yourbrews);