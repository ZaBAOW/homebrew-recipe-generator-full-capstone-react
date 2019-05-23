    
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
    
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }
    
    state = {
        activeSectionIndex: null
    }

    toggleHidden() {
        this.setState ({
            isHidden: !this.state.isHidden
        })
    }

//    hideItems(id) {
//        console.log('hiding recipes...');
//        const hideItems = document.getElementsByClassName('shown');
//        console.log(hideItems.classList);
////        hideItems.classList.remove('shown');
//        hideItems.class = "hidden";
//        this.handleId(id);
//    }
    
    handleId(id) {
        console.log('retrieving recipe...');
        const brewId = id;
        console.log('clicked brewId:', brewId);
        console.log(brewId);
        this.props.dispatch(viewRecipe(brewId));
        console.log(this.props);
        console.log(this.props.brewName);
//        this.showItems(id);
    }

//    showItems(id) {
//        console.log('showing recipe...');
//        const shownItem = document.getElementById(id);
//        console.log(shownItem);
////        this.hideItems(id)
//        shownItem.className = 'shown';
//    }
    
    renderItem(brew, index, id) {
        console.log('rendering item');
        this.handleId(id);
//        <ViewBrew recipe = {this.props} id = {id}/>
        return (
            <li className='Accordion_item' key={index}>
                {!this.state.isHidden && <p className="recipe">This is a brew recipe</p> }
                
            </li>
        )
    }
    
    handleSetActiveSection = (index) => {
        this.toggleHidden.bind(this);
        console.log(index);
        console.log('setting state');
        this.setState({ activeSectionIndex: index,
                        isHidden: !this.state.isHidden})
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
            const {items} = this.props;
            const {activeSectionIndex} = this.state;
//            let renderOutput = items.map((brew, index) => this.renderItem(brew, index, brewId, activeSectionIndex))
            let renderOutput = this.renderItem(brew, index, brewId)
            return (
              <div className="item" key={index}>
                <h3>{brew.brewName}</h3>
                <button
                  className="thumbnail"
                  type="button"
                  onClick={() => this.handleSetActiveSection(index)}
                >
                click to view
                </button>
                <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
                <ul className = "recipeSection">
                    { renderOutput }
                </ul>
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