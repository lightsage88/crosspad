import React from 'react';


const Analysis = (props) => {
    let rate = ((props.score / props.total).toFixed(2) * 100);
    
   
    return (
        <div data-testid="analysisDivEL">
            <h4 data-testid="analysisReadoutEL">The {props.franchiseName} franchise has a {rate}% approval rating.</h4>
        </div>
    )
}

export default Analysis;