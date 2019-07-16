import React, {Component} from 'react';
import MainGameData from './MainGameData';
import RelatedGames from './RelatedGames';
import Results from './Results';
import Trend from './Trend';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const MainContent = (props) => {
  let activeTab= props.searchOptions.length === 0 ? 'game' : 'results';

    return (
     
       
            
              <div data-testid="mainContentDivEl">
                <Tabs defaultActiveKey={activeTab}>
                {
                  props.searchOptions.length === 0 ? 
                  (<Tab id="resultsTab" eventKey="results" title="Results" disabled></Tab>)
                  :
                  //TODO: FIgure out if this ternary operator is actually needed
                  //because I think we took care of it in the code condensation for the 
                  //Provider
                  (<Tab id="resultsTab" eventKey="results" title="Results" >
                {<Results searchOptions={props.searchOptions}/>}
                  </Tab>)
                }                  
                  <Tab data-testid="mainContentGameTabEl" className="nintendoFont" eventKey="game" title="Game">
                    <MainGameData gameData={props.gameData}/> 
                  </Tab>
                  <Tab className="nintendoFont" eventKey="related" title="Related">
                    <RelatedGames relatedGames={props.relatedGames} gameData={props.gameData}/>
                  </Tab>
                  <Tab className="nintendoFont" eventKey="trend" title="Trend">
                    <Trend 
                      gameData={props.gameData}
                      relatedGames={props.relatedGames}
                    />
                  </Tab>
                </Tabs>
              </div>
    )
        
}

MainContent.defaultProps = {
  searchOptions: [
    
  ],
  relatedGames: [
    {}
  ],
  gameData: {}
}

export default MainContent;