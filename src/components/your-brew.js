import React from 'react';
import Nav from "./Nav";
import Brews from './brews'
import { connect } from  'react-redux';

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
    
    render() {
        return (
            <div>
                <section className="archive-section">
                    <Brews />
                </section>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    brews: state.brews,
    error: state.error
});

export default connect(mapStateToProps)(Archive);