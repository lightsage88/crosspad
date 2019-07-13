import React from 'react';


const Analysis = (props) => {
    let rate = ((props.score / props.total).toFixed(2) * 100);
    console.log(rate);
    
   
    return (
        <div>
            <h4>The {props.franchiseName} franchise has a {rate}% approval rating.</h4>
        </div>
    )
}

export default Analysis;