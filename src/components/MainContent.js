import React, {Component} from 'react';
import {Consumer} from './Context'
import MainGameData from './MainGameData';
import RelatedGames from './RelatedGames';
import Results from './Results';
import Trend from './Trend';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const MainContent = () => {
    return (
      <Consumer>
        {
          context => {
            let activeTab= context.searchOptions.length === 0 ? 'game' : 'results';
            return (
              <div>
                <Tabs defaultActiveKey={activeTab}>
                {
                  context.searchOptions.length === 0 ? 
                  (<Tab id="resultsTab" eventKey="results" title="Results" disabled></Tab>)
                  :
                  //TODO: FIgure out if this ternary operator is actually needed
                  //because I think we took care of it in the code condensation for the 
                  //Provider
                  (<Tab id="resultsTab" eventKey="results" title="Results" >
                {<Results />}
                  </Tab>)
                }                  
                  <Tab className="nintendoFont" eventKey="game" title="Game">
                    <MainGameData /> 
                  </Tab>
                  <Tab className="nintendoFont" eventKey="related" title="Related">
                    <RelatedGames />
                  </Tab>
                  <Tab className="nintendoFont" eventKey="trend" title="Trend">
                    <Trend />
                  </Tab>
                </Tabs>
              </div>
            )
          }
        }
      </Consumer>
    );  
}

export default MainContent;