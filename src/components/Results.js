import React from 'react';
import {Consumer} from './Context';


const Results = () => {
    return (
    <Consumer>
        {
            context=> {
                const options = context.searchOptions.map((option, index) => {
                    return <li  className='liButtonWrapper' 
                                key={index} 
                                onClick={()=>{context.actions.searchForSpecificGame(option.id)}}>
                            <button id={index + 'gameButton'} 
                                    type='button' 
                                    onClick={()=>{context.actions.playSound('coin')}}
                                    onMouseEnter={(e)=>{context.actions.hoverIntoButton(e.target.id, 'red')}} 
                                    onMouseLeave={(e)=>{context.actions.hoverIntoButton(e.target.id, 'blue')}}  
                                    className='nes-btn retroFont is-primary'>
                                {option.name}
                            </button>
                            </li>
                })

                return (
                    <ul className="gameButtonUL">
                    {options}
                    </ul>
           
                );
            }

           
            
        }
    </Consumer>

   
    )
}

export default Results;