    
import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import $ from 'jquery';

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
            isHidden: true
        }
        this.item = React.createRef();
    }
    
    state = {
        activeSectionIndex: null
    }



//    toggleHidden() {
//        this.setState ({
//            isHidden: !this.state.isHidden
//        })
//    }
    
    handleId(id) {
        const brewId = id;
        this.props.dispatch(viewRecipe(brewId));
    }
    
    renderItem(brew, index, id) {
        return (
            <li className='Accordion_item' key={index}>
                {!this.state.isHidden && <ViewBrew recipe = {this.props} id = {id}/> }
            </li>
        )
    }

    handleChange(event) {
        this.setState({isHidden: false});
    }
    
    handleSetActiveSection = (index, id) => {
        this.handleChange.bind(this);
//        console.log(el);
        this.handleId(id);
//        $(el).slideToggle();
//        console.log(id);
    }

    
  render() {

    let resultsList = [];
    const style =  this.state.isHidden ? {display: 'none'} : {};
    // for rendering search list
    if (this.props.brews === undefined) {
        console.log('brew prop is undefined');
    } else {
        if (this.props.brews.length == 0){
            console.log('brew prop is 0');
            console.log(this.props.brews.length);
        } else {
          let oldIndex = 'a';
          let newIndex = '';
          resultsList = this.props.brews.results.map((brew, index) => {
            newIndex = index;
            console.log(brew);
            console.log('newIndex:', newIndex);
            console.log('oldIndex', oldIndex);
            console.log('current index:', index);
            if(newIndex != oldIndex) {
                const brewId = brew._id;
                const {items} = this.props;
                console.log('conditional passed');
                const {activeSectionIndex} = this.state;
//                let renderOutput = this.renderItem(brew, index, brewId)
                oldIndex = newIndex;
                return (
                  <div className="brewItem" ref={brewId} key={index}>
                    <h3>{brew.brewName}</h3>
                    <input type='hidden' className='brewId' value={brew._id} ref={input => (this.input = input)} />
                    <div className='toggleSection' ref={this.item} onClick={this.handleSetActiveSection(index, brewId)}>
                        click to view
                        <ul className = "recipeSection" id={brewId} >
                            {this.renderItem(brew, index, brewId)}
                        </ul>
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