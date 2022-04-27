import React from 'react';
import {Consumer} from './Context';


const Results = (props) => {
    return (
    <Consumer>
        {
            context=> {

                const generateOptions = (context, props) => {
                    const options = props.searchOptions.map((option, index) => {
                        console.log('lets lookat the option', option);
                    return <li data-testid={"resultsLI-" + index} className='liButtonWrapper' 
                                key={index} 
                                onClick={(()=>(context.actions.requestFromGames('specificGame', ['aggregated_rating', 'release_dates.y', 'collection', 'name', 'summary', 'cover'], option.id, '', '')))} >
                            <button data-testid={"resultsButton-"+index} id={index + 'gameButton'} 
                                    type='button' 
                                    onClick={()=>{context.actions.playSound('coin')}}
                                    onMouseEnter={(e)=>{context.actions.hoverIntoButton(e.target.id, 'red')}} 
                                    onMouseLeave={(e)=>{context.actions.hoverIntoButton(e.target.id, 'blue')}}  
                                    className='nes-btn retroFont is-primary'>
                                {option.name}
                            </button>
                            </li>
                    })
                    return options
                }

                

                return (
                    <ul data-testid="resultsUlEl" className="gameButtonUL">
                    {generateOptions(context, props)}
                    </ul>
           
                );
            }

           
            
        }
    </Consumer>

   
    )
}

Results.defaultProps = {
    searchOptions: []
}

export default Results;