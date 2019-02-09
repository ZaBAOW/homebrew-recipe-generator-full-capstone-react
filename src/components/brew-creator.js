import React from 'react';
//import './brew-creator.css';
import { submitRecipe } from '../actions';

export class Create extends React.Component {
    
    // malt field may have multiple malts which may require
    // the field to be retrieved as an array. Same with malt
    // measurements.
    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.brewName, this.maltName, this.maltMeasure, this.hopsName, this.hopsMeasure, this.yeastName, this.yeastSchedule, this.mashSchedule]
        const homeBrew = {
            brewName: this.brewName.value,
            maltName: this.maltName.value,
            maltMeasure: this.maltMeasure.value,
            hopsName: this.hopsName.value,
            hopsMeasure: this.hopsMeasure.value,
            yeastName: this.yeastName.value,
            yeastSchedule: this.yeastSchedule.value,
            mashSchedule: this.mashSchedule.value
        }
        this.props.dispatch(submitRecipe(homeBrew));
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        return(
             <form class="brew-form" onSubmit={this.onSubmit}>
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="brew-name-section">Brew Title:
                      <input type="text" class="brewName"></input>
                    </div>
                    <div class="malt-section"><p>Malts:</p>
                      <div class="maltName">Malt Types:
                        <input type="text" placeholder="name of malt"></input>
                        <button></button>
                      </div>
                      <div class="maltMeasure">Measurements:
                        <input type="text" placeholder="amount of malt"></input>
                      </div>
                    </div>
                    <div class="hops-section"><p>Hops:</p>
                      <div class="hopsName">Hops Types:
                        <input type="text" placeholder="name of hops"></input>
                      </div>
                      <div class="hopsMeasure">Measurements:
                        <input type="text" placeholder="amount of hops"></input>
                      </div>
                    </div>
                    <div class="yeast-section"><p>Yeast:</p>
                      <div class="yeastName">Yeast Types:
                        <input type="text" placeholder="name of yeast"></input>
                      </div>
                      <p>Yeast Schedule:</p>
                        <textarea class="yeastSchedule" rows="15" col="100" placeholder="Type your yeast schedule here" class="yeast-schedule"></textarea>
                    </div>
                    <div class="mash-scheduleSection"><p>Mash Schedule:</p>
                      <div>
                        <textarea class="mashSchedule" rows="15" col="100" placeholder="type your schedule here"></textarea>
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