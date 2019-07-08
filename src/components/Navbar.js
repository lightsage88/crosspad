import React from 'react'
import Searchbar from './Searchbar';

const Navbar = (props) => {

    return (
        <div id="navbarDiv">
            <Searchbar handleTypingChange={props.handleTypingChange} options={props.searchOptionsListItems}/>
        </div>
    )

}

export default Navbar;