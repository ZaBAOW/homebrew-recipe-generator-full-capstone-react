    
import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import ReactTooltip from 'react-tooltip';

import { deleteRecipe, viewRecipe } from "../actions";
import { Redirect } from "react-router-dom";
import { findDOMNode } from 'react-dom';

import ViewBrew from './brew-viewer';


export class Brews extends React.Component {

//  deleteRecipe(target) {
//    this.props.dispatch(deleteRecipe(target.id, this.props.authToken));
//  }
    
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
    
    handleSetActiveSection = (index, brewId) => {
        console.log('click');
        console.log(brewId);
        this.handleId(brewId);
    }

    
  render() {

    let resultsList = [];
    const style =  this.state.isHidden ? {display: 'none'} : {};
    // for rendering search list
    console.log(this.props.browserBrews);
    if (this.props.browserBrews === undefined) {
        console.log('brew prop is undefined');
    } else {
        if (this.props.browserBrews.length == 0){
            console.log('brew prop is 0');
            console.log(this.props.browserBrews.length);
        } else {
          let oldIndex = 'a';
          let newIndex = '';
          console.log('starting mapping process');
          resultsList = this.props.browserBrews.results.map((brew, index) => {
            newIndex = index;
            console.log(brew);
            console.log('newIndex:', newIndex);
            console.log('oldIndex', oldIndex);
            console.log('current index:', index);
            if((newIndex + 1) == resultsList.length) {
                console.log('finished displaying results');
            } else if(newIndex != oldIndex) {
                const brewId = brew._id;
                console.log(brewId);
                const {items} = this.props;
                console.log('conditional passed');
                oldIndex = newIndex;
                const recipeTemplate =  <ViewBrew recipe = {this.props} id = {brewId} />
                console.log(recipeTemplate);
                const popoverClass = 'recipe-popoup-'+brew.brewName;
                return (
                  <div className="brewItem" key={index}>
                    <h3>{brew.brewName}</h3>
                    <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
                    <div className="toggleSection" ref={this.item}>
                        <a data-for={brewId} data-tip="" data-event='click' >Tooltip</a>
                        <ReactTooltip id={brewId} place="bottom" type='info' afterShow = {() => {this.handleSetActiveSection(index, brewId)}}>
                            {recipeTemplate}
                        </ReactTooltip>
                    </div>
                  </div>
                );
            }

          });
        }
    } 


    // for rendering watchlist
//    if (this.props.watchlist.length > 0) {
//      videoGallery = this.props.watchlist.map((video, index) => {
//        return (
//          <div className="item" key={index}>
//            <h3>{video.title}</h3>
//            <button
//              type="button"
//              id={video._id}
//              className="remove-btn"
//              onClick={e => this.deleteVideo(e.currentTarget)}
//            >
//              Remove
//            </button>
//            <button
//              className="thumbnail"
//              type="button"
//              id={video.videoID}
//              onClick={e => this.playVideo(e.currentTarget, "watchlist")}
//            >
//              <img src={video.thumbnail} alt={video.title} />
//            </button>
//          </div>
//        );
//      });
//    }
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