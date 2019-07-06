import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
 

  render() {
    
    return (
      <div className="App">
      <Container>
        <Jumbotron className='nes-container' >
          <h1 className='nintendoFont'>CROSSPAD</h1>

          <p>track game franchises' appreciation over time!</p>
        </Jumbotron>
        <Navbar handleTypingChange={this.handleTypingChange} />
        {
          //game content
        }
        
      </Container>
      </div>
    );
  }
  
}

export default App;
