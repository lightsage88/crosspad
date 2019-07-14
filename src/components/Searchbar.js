import React from 'react';
import {Consumer} from './Context';
import Accordion from 'react-bootstrap/Accordion';

import PropTypes from 'prop-types';


const Searchbar = () => {

    
    return (
        <Consumer>
        
        {
            context => {
                



                const inputChanges = (e) => {
                    let searchValue = e.target.value;
                    context.actions.handleTypingChange ? setTimeout(()=>{context.actions.handleTypingChange(searchValue)}, 500) : console.log('yo');
                }



                return (
                    <section data-testid="searchBarSectionEl" className='showcase'>
                        <section className="nes-container with-title">
                        <h3 className='title retroFont'>SEARCH</h3>
                        <form>
                            <input data-testid="searchBarInputEl" className='nes-input retroFont is-dark' onChange={inputChanges} type='text'>
                            </input>
                        </form>
                        </section>
                    </section>
                );
            }
        }
        
        </Consumer>
    )
}


export default Searchbar;