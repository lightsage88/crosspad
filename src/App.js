import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import './App.css';

class App extends Component {
 

  render() {
    
    return (
      <div className="App">
      <Container>
        <Header />
        
      </Container>
      </div>
    );
  }
  
}

export default App;
