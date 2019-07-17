import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div data-testid="headerDivEl">
        <Jumbotron className='nes-container' >
          <h1 id="headerH1" className='snesFont'>CROSSPAD</h1>
          <i id="headerMario" className="nes-mario"></i>
          <p id="headerP" className='nintendoFont'>track game franchises' appreciation over time!</p>
        </Jumbotron>
        <Navbar/>
        </div>
    );
}



export default Header;