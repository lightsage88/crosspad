import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div>
        <Jumbotron className='nes-container' >
          <h1 className='nintendoFont'>CROSSPAD</h1>

          <p>track game franchises' appreciation over time!</p>
        </Jumbotron>
        <Navbar/>
        </div>
    );
}



export default Header;