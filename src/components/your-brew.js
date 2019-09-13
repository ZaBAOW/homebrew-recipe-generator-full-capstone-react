import React from 'react';
import Yourbrews from './brews-archive'
import { connect } from  'react-redux';
import $ from  'jquery';

import { getYourBrews} from "../actions";

export class Archive extends React.Component {
    
    
    componentDidMount() {
        console.log('archive component mounted')
        this.getArchive();
    }
    
    getArchive() {
        console.log('getting your recipes')
        const userId = localStorage.getItem('userId');
        console.log(userId);
        this.props.dispatch(getYourBrews(userId));
    }
    
    handleHide = () => {
        $('.toggleSection').attr('style', 'display: none');
    }
    
    render() {
        return (
            <div className="archive-container">
                <section className="archive-section">
                    <Yourbrews />
                </section>
                <button className='hide-all' onClick={() => this.handleHide()}>Hide Recipes</button>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    archiveBrews: state.archiveBrews,
    error: state.error
});

export default connect(mapStateToProps)(Archive);