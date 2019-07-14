import React from 'react'
import Searchbar from './Searchbar';

const Navbar = (props) => {

    return (
        <div data-testid="navbarDivEl" id="navbarDiv">
            <Searchbar />
        </div>
    )

}

export default Navbar;