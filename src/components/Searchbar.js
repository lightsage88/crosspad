import React from 'react';
import {Consumer} from './Context';
import PropTypes from 'prop-types';


const Searchbar = (props) => {

    

    return (
        <Consumer>
        {
            context => {
                const options = context.searchOptions.map((option, index) => {
                    return <li key={index} onClick={()=>{context.actions.searchForSpecificGame(option.id)}}>{option.name}</li>
                })

                const inputChanges = (e) => {
                    let searchValue = e.target.value;
                    context.actions.handleTypingChange ? setTimeout(()=>{context.actions.handleTypingChange(searchValue)}, 500) : console.log('yo');
                }

                return (
                    <div>
            <form>
                <input onChange={inputChanges} type='text'></input>
                <button type='submit'></button>
            </form>
            <ul>
                {options}
            </ul>
        </div>
                );
            }
        }
        
        </Consumer>
    )
}


export default Searchbar;