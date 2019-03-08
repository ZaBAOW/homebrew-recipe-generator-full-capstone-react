import React from 'react';
//import './main.css';
//import 'router'

export default function Result(props) {
    return(
        <div className="result-container">
            {props.brewName}
            <div className="detail-container">
                {props.abv}
            </div>
        </div>
    )
}

Result.defaultProps = {
    brewName: '' ,
    abv: ''
}

//notes

//default props will be recieved from router