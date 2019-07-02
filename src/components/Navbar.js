import React from 'react'
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';

const Navbar = (props) => {

    return (
        <div id="navbarDiv">
            <Searchbar handleTypingChange={props.handleTypingChange} options={props.searchOptionsListItems}/>
        </div>
    )

}

export default Navbar;