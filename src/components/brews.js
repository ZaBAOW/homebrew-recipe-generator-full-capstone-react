import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import { deleteRecipe, viewRecipe } from "../actions";
import { Redirect } from "react-router-dom";


export class Brews extends React.Component {

//  deleteRecipe(target) {
//    this.props.dispatch(deleteRecipe(target.id, this.props.authToken));
//  }

    
    handleId(e) {
        console.log('click!');
//        e.preventDefault();
        const brewId = this.input.value;
        console.log('clicked brewId:', brewId);
        console.log(brewId);
        this.props.dispatch(viewRecipe(brewId));
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
            return (
              <div className="item" key={index}>
                <h3>{brew.brewName}</h3>
                <button
                  className="thumbnail"
                  type="button"
                  onClick={() => this.handleId()}
                >
                click to view
                </button>
                <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
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
  loading: state.loading
});

export default connect(mapStateToProps)(Brews);