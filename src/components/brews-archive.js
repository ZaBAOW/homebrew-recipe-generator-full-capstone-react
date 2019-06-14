import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import { deleteRecipe, viewRecipe } from "../actions";
import {findDOMNode} from 'react-dom';
import { Redirect } from "react-router-dom";
import ViewBrew from './brew-viewer';

export class Yourbrews extends React.Component {

//  deleteRecipe(target) {
//    this.props.dispatch(deleteRecipe(target.id, this.props.authToken));
//  }
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
    
    showToolTip = (id) => {
        console.log(id);
        $('.brewToolTip').attr('data-tip-disable', 'true');
        document.getElementById(id).setAttribute("data-tip-disable", "false");
    }
    
    handleToolTip = (index, id) => {
        this.handleId(id);
    }
    
  render() {

    let resultsList = [];
    // for rendering search list
    console.log(this.props.archiveBrews);
    if(this.props.archiveBrews === undefined) {
        console.log('brew prop is undefined')
    } else if (this.props.archiveBrews.length == 0) {
      console.log('brew prop is null')
      console.log(this.props.archiveBrews.length);
    } else {
      console.log('archiveBrews length is not 0!');
      console.log('archiveBrews length: ', this.props.archiveBrews[0].results);
      resultsList = this.props.archiveBrews[0].results.map((brew, index) => {
        const brewId = brew._id;
        console.log(brewId);
        const {items} = this.props;
        const recipeTemplate =  <ViewBrew recipe = {this.props} id = {brewId} />
        return (
          <div className="brewItem" ref={brewId} key={index}>
            <h3>{brew.brewName}</h3>
            <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
            <div className="toggleSection" ref={this.item}>
                <a id= {brewId} className="brewTooltip" ref={brew.brewName} data-for={brewId} data-tip="" data-tip-disable='true' data-event='click'>Tooltip</a>
                <button onClick= {() => this.showToolTip(brewId)}
                >Click to View</button>
                <ReactTooltip id={brewId} place="bottom" type='info' afterShow = {() => {this.handleToolTip(index, brewId)}}>
                    {recipeTemplate}
                </ReactTooltip>
            </div>
          </div>
        );
      });
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
    return <div className="results-list">{resultsList}</div>;
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