import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Loader from './components/Loader';
import {Consumer} from './components/Context';
import './App.css';

const App = () => {

  return (
    <Consumer>
    {
      context => {
        return (
          <div data-testid="appDiv" className="App">
                  
          <Loader />
            <Container id="appContainer">
              <Header />
              <MainContent 
                
                searchOptions={context.searchOptions}
                relatedGames={context.relatedGames}
                gameData={context.gameData}  
              />
            </Container>
          </div>
        );
      }
    }
    </Consumer>
  ) 
}
  


export default App;
