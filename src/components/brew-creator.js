import React from 'react';
import './brew-creator.css';

export class Create extends React.Component() {
    
    // malt field may have multiple malts which may require
    // the field to be retrieved as an array. Same with malt
    // measurements.
    onSubmit(e) {
        e.preventDefault();
        const inputs = [this.brew-name, this.malt-name, this.malt-measure, this.hops-name, this.hops-measure, this.yeast-name, this.yeast-schedule, this.mash-schedule]
        const homeBrew = {
            brewName: this.brew-name.value,
            maltName: this.malt-name.value,
            maltMeasure: this.malt-measure.value,
            hopsName: this.hops-name.value,
            hopsMeasure: this.hops-measure.value,
            yeastName: this.yeast-name.value,
            yeastSchedule: this.yeast-schedule.value,
            mashSchedule: this.mash-schedule.value
        }
        this.props.dispatch(brewSubmit(homeBrew));
        inputs.map(input => (input.value = ""));
    }
    
    render() {
        return(
             <form class="brew-form" onSubmit={this.onSubmit}>
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="brew-name-section">Brew Title:
                      <input type="text" class="brew-name">
                    </div>
                    <div class="malt-section"><p>Malts:</p>
                      <div class="malt-name">Malt Types:
                        <input type="text" placeholder="name of malt">
                        <button></button>
                      </div>
                      <div class="malt-measure">Measurements:
                        <input type="text" placeholder="amount of malt">
                      </div>
                    </div>
                    <div class="hops-section"><p>Hops:</p>
                      <div class="hops-name">Hops Types:
                        <input type="text" placeholder="name of hops">
                      </div>
                      <div class="hops-measure">Measurements:
                        <input type="text" placeholder="amount of hops">
                      </div>
                    </div>
                    <div class="yeast-section"><p>Yeast:</p>
                      <div class="yeast-name">Yeast Types:
                        <input type="text" placeholder="name of yeast">
                      </div>
                      <p>Yeast Schedule:</p>
                        <textarea class="yeast-schedule" rows="15" col="100" placeholder="Type your yeast schedule here" class="yeast-schedule"></textarea>
                    </div>
                    <div class="mash-schedule-section"><p>Mash Schedule:</p>
                      <div>
                        <textarea class="mash-schedule" rows="15" col="100" placeholder="type your schedule here"></textarea>
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