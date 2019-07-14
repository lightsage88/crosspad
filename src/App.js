import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Loader from './components/Loader';
import './App.css';

class App extends Component {



  


  render() {

   

   

    return (
      <div data-testid="appDiv" className="App">
              
      <Loader />
        <Container id="appContainer">
          <Header />
          <MainContent />
        </Container>
      </div>
    );
  }
  
}

export default App;
