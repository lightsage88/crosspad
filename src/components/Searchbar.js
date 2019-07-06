import React from 'react';
import {Consumer} from './Context';
import PropTypes from 'prop-types';


const Searchbar = (props) => {

    
//onMouseOver={context.actions.hoverIntoButton} 
    return (
        <Consumer>
        
        {
            context => {
                const options = context.searchOptions.map((option, index) => {
                    return <li  className='liButtonWrapper' key={index} onClick={()=>{context.actions.searchForSpecificGame(option.id)}}>
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



                const inputChanges = (e) => {
                    let searchValue = e.target.value;
                    context.actions.handleTypingChange ? setTimeout(()=>{context.actions.handleTypingChange(searchValue)}, 500) : console.log('yo');
                }



                return (
                    <section className='showcase'>
                        <section className="nes-container with-title">
                        <h3 className='title retroFont'>Enter the name of a game and select an option</h3>
                        <form>
                            <input className='nes-input retroFont' onChange={inputChanges} type='text'></input>
                        </form>
                        <ul className='gameButtonUL'>
                            {options}
                        </ul>
                        </section>
                    </section>
                );
            }
        }
        
        </Consumer>
    )
}


export default Searchbar;