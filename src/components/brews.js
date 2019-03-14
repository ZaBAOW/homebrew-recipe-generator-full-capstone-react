import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import { deleteRecipe } from "../actions";
import { Redirect } from "react-router-dom";


export class Brews extends React.Component {

//  deleteRecipe(target) {
//    this.props.dispatch(deleteRecipe(target.id, this.props.authToken));
//  }

  render() {

    let resultsList = [];
    console.log(this.props);
    // for rendering search list
    if (this.props.brews.length > 0) {
      resultsList = this.props.brews.map((brew, index) => {
        return (
          <div className="item" key={index}>
            <h3>{brew.snippet.title}</h3>
            <button
              className="thumbnail"
              type="button"
              id={brew.id.brewId}
            >
            </button>
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
  brews: state.brews,
  loading: state.loading
});

export default connect(mapStateToProps)(Brews);