    
import React from "react";
import { connect } from "react-redux";
import $ from "jquery";
import { viewRecipe } from "../actions";

import ViewBrew from './brew-viewer';


export class Brews extends React.Component {
    
    constructor () {
        super()
        this.state = {
            hideToolTip: false,
            browserBrews: []
        }
        this.item = React.createRef();
    }
    
    state = {
        activeSectionIndex: null
    }

    
    handleId(id) {
        const brewId = id;
        this.props.dispatch(viewRecipe(brewId));
    }

    handleChange(event) {
        this.setState({hideToolTip: true});
    }

    handleToolTip = (index, id, brewName) => {
        $('.toggleSection').attr('style', 'display: none');
        this.handleId(id);
        $('#' + brewName).attr('style', 'dipslay: inline-block');
    }
    
  render() {

    let resultsList = [];
    // for rendering search list
    if (this.props.browserBrews === undefined) {
        console.log('brew prop is undefined');
    } else {
        if (this.props.browserBrews.length === 0){
            return (
                <p style={{color: 'white'}}>search for a brew to display results</p>
            );
        } else {
          let oldIndex = 'a';
          let newIndex = '';
          resultsList = this.props.browserBrews.results.map((brew, index) => {
            newIndex = index;
            if((newIndex + 1) === resultsList.length) {
                console.log('finished displaying results');
            } else if(newIndex !== oldIndex) {
                const brewId = brew._id;
                const brewName = brew.brewName;
                oldIndex = newIndex;
                const recipeTemplate =  <ViewBrew recipe = {this.props} id = {brewId} />
                return (
                  <div className="brewItem color-bgsecondary-1-2" key={index}>
                    <h2>Brew Name: {brewName}</h2>
                    <h3>%abv: {brew.abv}</h3>
                    <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
                    <button type='button' className="view-button" onClick={() => {this.handleToolTip(index,brewId, brewName)}}>View Recipe</button>
                    <div style={{display: 'none'}} id={brewName} className="toggleSection">
                        {recipeTemplate}
                    </div>
                  </div>
                );
            }
            return([]);
          });
        }
    } 
    return (
        <div className="results-list">{resultsList}</div>
    )
  }
}

export const mapStateToProps = state => ({
  browserBrews: state.browserBrews,
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

export default connect(mapStateToProps)(Brews);