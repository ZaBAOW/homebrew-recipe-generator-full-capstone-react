    
import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import { deleteRecipe, viewRecipe } from "../actions";
import { Redirect } from "react-router-dom";
import ViewBrew from './brew-viewer';


export class Brews extends React.Component {

//  deleteRecipe(target) {
//    this.props.dispatch(deleteRecipe(target.id, this.props.authToken));
//  }

    
    handleId(id) {
        console.log('click!');
        const brewId = id;
        console.log('clicked brewId:', brewId);
        console.log(brewId);
        this.props.dispatch(viewRecipe(brewId));
        console.log(this.props);
    }
    
  render() {

    let resultsList = [];
    // for rendering search list
    if (this.props.brews === undefined) {
        console.log('brew prop is undefined');
    } else {
        console.log('brew prop was not undefined');
        if (this.props.brews.length == 0){
            console.log('brew prop is 0');
            console.log(this.props.brews.length);
        } else {
          console.log('brews length: ', this.props.brews.results);
          resultsList = this.props.brews.results.map((brew, index) => {
            const brewId = brew._id;
            return (
              <div className="item" key={index}>
                <h3>{brew.brewName}</h3>
                <button
                  className="thumbnail"
                  type="button"
                  onClick={() => this.handleId(brew._id)}
                >
                click to view
                </button>
                <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
                <ViewBrew recipe = {this.props}/>
              </div>
            );
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
    return <div className="results-list">{resultsList}</div>;
  }
}

export const mapStateToProps = state => ({
  brews: state.brews,
  maltName: state.maltName,
  maltMeasure: state.maltMeasure,
  hopsName: state.hopsName,
  hopsMeasure: state.hopsMeasure,
  yeastName: state.yeastName,
  yeastMeasure: state.yeastMeasure,
  yeastSchedule: state.yeastSchedule,
  mashSchedule: state.mashSchedule,
  loading: state.loading
});

export default connect(mapStateToProps)(Brews);