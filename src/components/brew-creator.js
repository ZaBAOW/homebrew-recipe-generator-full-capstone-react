import React from 'react';
import { connect } from  'react-redux';
//import './brew-creator.css';
import { submitRecipe } from '../actions';

export class Creator extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    // malt field may have multiple malts which may require
    // the field to be retrieved as an array. Same with malt
    // measurements.
    
    lacking() {
        alert('A field was left blank.  Make sure to fill out all fields.');
    }
    
    onSubmit(e) {
        e.preventDefault();
        const homeBrew = {
            brewName: this.brewName.value,
            abv: this.abv.value,
            maltName: this.maltName.value,
            maltMeasure: this.maltMeasure.value,
            hopsName: this.hopsName.value,
            hopsMeasure: this.hopsMeasure.value,
            yeastName: this.yeastName.value,
            yeastMeasure: this.yeastMeasure.value,
            yeastSchedule: this.yeastSchedule.value,
            mashSchedule: this.mashSchedule.value
        }
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('authToken');
        this.props.dispatch(submitRecipe(homeBrew, userId, token));
    }
    
    render() {
        return(
             <form className="brew-form" onSubmit={this.onSubmit}>
              <div className="container color-bgprimary-2">
                <div className="row">
                  <div className="col-md-12 form-section">
                        <div className="brew-name-section color-primary-5 color-bgprimary-5"><label htmlFor="createBrewname" className='creator-label'>Brew Title:</label>
                      <input type="text" id='createBrewname' placeholder="Name of your Brew" className="brewName creator-input" ref={input => (this.brewName = input)}></input>
                    </div>
                   <div className="abv-section color-primary-5 color-bgprimary-5"><label htmlFor="createAbv" className='creator-label'>%abv:</label>
                      <input type="text" id="createAbv" placeholder="% alcohol by volume" className="abv creator-input" ref={input => (this.abv = input)}></input>
                    </div>
                    <div className="malt-section color-primary-5 color-bgprimary-5"><p>Malts:</p>
                      <div className="maltName color-primary-5 color-bgprimary-5"><label htmlFor='createMaltType' className='creator-label'>Malt Types:</label>
                        <input type="text" id='createMaltType' placeholder="name of malt" className="creator-input" ref={input => (this.maltName = input)}></input>
                      </div>
                      <div className="maltMeasure color-primary-5 color-bgprimary-5"><label htmlFor="createMaltMeasure" className='creator-label'>Measurements(lbs.):</label>
                        <input type="text" id='createMaltMeasure' placeholder="amount of malt" className="creator-input" ref={input => (this.maltMeasure = input)}></input>
                      </div>
                    </div>
                    <div className="hops-section color-primary-5 color-bgprimary-5"><p>Hops:</p>
                      <div className="hopsName"><label htmlFor='createHopsType' className='creator-label'>Hops Types:</label>
                        <input type="text" id='createHopsType' placeholder="name of hops" className="creator-input" ref={input => (this.hopsName = input)}></input>
                      </div>
                      <div className="hopsMeasure color-primary-5 color-bgprimary-5"><label htmlFor="createHopsMeasure" className='creator-label'>Measurements(oz.):</label>
                        <input type="text" id="createHopsMeasure" placeholder="amount of hops" className="creator-input" ref={input => (this.hopsMeasure = input)}></input>
                      </div>
                    </div>
                    <div className="yeast-section color-primary-5 color-bgprimary-5"><p>Yeast:</p>
                      <div className="yeastName"><label htmlFor="createYeastType" className='creator-label'>Yeast Types:</label>
                        <input type="text" id='createYeastType' placeholder="name of yeast" className="creator-input" ref={input => (this.yeastName = input)}></input>
                      </div>
                      <div className="yeastMeasure color-primary-5 color-bgprimary-5"><label htmlFor="createYeastMeasure" className='creator-label'>Measurements(lbs.):</label>
                        <input type="text" id="createYeastMeasure" placeholder="amount of yeast" className="creator-input" ref={input => (this.yeastMeasure = input)}></input>
                      </div>
                      <label htmlFor='createYeastSchedule' className="creator-label color-primary-5 color-bgprimary-5">Yeast Schedule:</label>
                        <textarea className="yeastSchedule" id="createYeastSchedule" rows="15" col="100" placeholder="Type your yeast schedule here" ref={input => (this.yeastSchedule = input)}></textarea>
                    </div>
                    <div className="mash-scheduleSection color-primary-5 color-bgprimary-5">
                      <div>
                        <label htmlFor="createMashSchedule" className="creator-label">Mash Schedule:</label>
                        <textarea className="mashTextarea" id="createMashSchedule" rows="15" col="100" placeholder="type your schedule here" ref={input => (this.mashSchedule = input)}></textarea>
                      </div>
                    </div>
                    <button className="submit-button">Submit Homebrew</button>
                  </div>
                </div>
              </div>
            </form>  
        )
    }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateToProps)(Creator)