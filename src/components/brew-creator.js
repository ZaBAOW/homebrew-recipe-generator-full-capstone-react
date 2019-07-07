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
        const inputs = [this.brewName.value, this.abv.value, this.maltName.value, this.maltMeasure.value, this.hopsName.value, this.hopsMeasure.value, this.yeastName.value, this.yeastMeasure.value, this.yeastSchedule.value, this.mashSchedule.value]
        console.log(inputs);
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
        console.log(homeBrew);
        const userId = localStorage.getItem('userId');
        console.log(localStorage.getItem('userId'));
        const token = localStorage.getItem('authToken');
        this.props.dispatch(submitRecipe(homeBrew, userId, token));
//        alert('Congrats, you just posted a recipe to the database!!!')
    }
    
    render() {
        return(
             <form className="brew-form" onSubmit={this.onSubmit}>
              <div className="container color-bgprimary-2">
                <div className="row">
                  <div className="col-md-12 form-section">
                        <div className="brew-name-section color-primary-5 color-bgprimary-5"><label className='creator-label'>Brew Title:</label>
                      <input type="text" placeholder="Name of your Brew" className="brewName creator-input" ref={input => (this.brewName = input)}></input>
                    </div>
                   <div className="abv-section color-primary-5 color-bgprimary-5"><label className='creator-label'>%abv:</label>
                      <input type="text" placeholder="% alcohol by volume" className="abv creator-input" ref={input => (this.abv = input)}></input>
                    </div>
                    <div className="malt-section color-primary-5 color-bgprimary-5"><p>Malts:</p>
                      <div className="maltName color-primary-5 color-bgprimary-5"><label className='creator-label'>Malt Types:</label>
                        <input type="text" placeholder="name of malt" className="creator-input" ref={input => (this.maltName = input)}></input>
                      </div>
                      <div className="maltMeasure color-primary-5 color-bgprimary-5"><label className='creator-label'>Measurements:</label>
                        <input type="text" placeholder="amount of malt" className="creator-input" ref={input => (this.maltMeasure = input)}></input>
                      </div>
                    </div>
                    <div className="hops-section color-primary-5 color-bgprimary-5"><p>Hops:</p>
                      <div className="hopsName"><label className='creator-label'>Hops Types:</label>
                        <input type="text" placeholder="name of hops" className="creator-input" ref={input => (this.hopsName = input)}></input>
                      </div>
                      <div className="hopsMeasure color-primary-5 color-bgprimary-5"><label className='creator-label'>Measurements:</label>
                        <input type="text" placeholder="amount of hops" className="creator-input" ref={input => (this.hopsMeasure = input)}></input>
                      </div>
                    </div>
                    <div className="yeast-section color-primary-5 color-bgprimary-5"><p>Yeast:</p>
                      <div className="yeastName"><label className='creator-label'>Yeast Types:</label>
                        <input type="text" placeholder="name of yeast" className="creator-input" ref={input => (this.yeastName = input)}></input>
                      </div>
                      <div className="yeastMeasure color-primary-5 color-bgprimary-5"><label className='creator-label'>Measurements:</label>
                        <input type="text" placeholder="amount of yeast" className="creator-input" ref={input => (this.yeastMeasure = input)}></input>
                      </div>
                      <p className="color-primary-5 color-bgprimary-5">Yeast Schedule:</p>
                        <textarea className="yeastSchedule color-primary-5" rows="15" col="100" placeholder="Type your yeast schedule here" className="yeast-schedule" ref={input => (this.yeastSchedule = input)}></textarea>
                    </div>
                    <div className="mash-scheduleSection color-primary-5 color-bgprimary-5"><p>Mash Schedule:</p>
                      <div>
                        <textarea className="mashTextarea" rows="15" col="100" placeholder="type your schedule here" ref={input => (this.mashSchedule = input)}></textarea>
                      </div>
                    </div>
                    <button className="submit-button">Submit Hombrew</button>
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