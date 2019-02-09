import React from 'react';
//import './main.css';
//import 'router'

export default function Result(props) {
    return(
        <div class="result-container">
            {props.brewName}
            <div class="detail-container">
                {props.brewType}
                {props.abv}
            </div>
        </div>
    )
}

Result.defaultProps = {
    brewName: '' ,
    brewType: '' ,
    abv: ''
}

//notes

//default props will be recieved from router