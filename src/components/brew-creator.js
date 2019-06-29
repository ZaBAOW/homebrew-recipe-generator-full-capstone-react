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
//        this.props.history.push('/dashboard/archive');
    }
    
    render() {
        return(
             <form className="brew-form" onSubmit={this.onSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="brew-name-section">Brew Title:
                      <input type="text" placeholder="Name of your Brew" className="brewName" ref={input => (this.brewName = input)}></input>
                    </div>
                   <div className="abv-section">%abv:
                      <input type="text" placeholder="% alcohol by volume" className="abv" ref={input => (this.abv = input)}></input>
                    </div>
                    <div className="malt-section"><p>Malts:</p>
                      <div className="maltName">Malt Types:
                        <input type="text" placeholder="name of malt" ref={input => (this.maltName = input)}></input>
                      </div>
                      <div className="maltMeasure">Measurements:
                        <input type="text" placeholder="amount of malt" ref={input => (this.maltMeasure = input)}></input>
                      </div>
                    </div>
                    <div className="hops-section"><p>Hops:</p>
                      <div className="hopsName">Hops Types:
                        <input type="text" placeholder="name of hops" ref={input => (this.hopsName = input)}></input>
                      </div>
                      <div className="hopsMeasure">Measurements:
                        <input type="text" placeholder="amount of hops" ref={input => (this.hopsMeasure = input)}></input>
                      </div>
                    </div>
                    <div className="yeast-section"><p>Yeast:</p>
                      <div className="yeastName">Yeast Types:
                        <input type="text" placeholder="name of yeast" ref={input => (this.yeastName = input)}></input>
                      </div>
                      <div className="yeastMeasure">Measurements:
                        <input type="text" placeholder="amount of yeast" ref={input => (this.yeastMeasure = input)}></input>
                      </div>
                      <p>Yeast Schedule:</p>
                        <textarea className="yeastSchedule" rows="15" col="100" placeholder="Type your yeast schedule here" className="yeast-schedule" ref={input => (this.yeastSchedule = input)}></textarea>
                    </div>
                    <div className="mash-scheduleSection"><p>Mash Schedule:</p>
                      <div>
                        <textarea className="mashSchedule" rows="15" col="100" placeholder="type your schedule here" ref={input => (this.mashSchedule = input)}></textarea>
                      </div>
                    </div>
                    <button>Submit Hombrew</button>
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