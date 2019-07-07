import React, {Component} from 'react';
import MainGameData from './MainGameData';
import RelatedGames from './RelatedGames';
import Trend from './Trend';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const MainContent = () => {
    return (
            <div>
                
                <Tabs defaultActiveKey="profile">
                    <Tab className="nintendoFont" eventKey="home" title="Game">
                       <MainGameData /> 
                    </Tab>
                    <Tab className="nintendoFont" eventKey="profile" title="Related">
                        <RelatedGames />
                    </Tab>
                    <Tab className="nintendoFont" eventKey="contact" title="Trend">
                        <Trend />
                    </Tab>
                </Tabs>
            </div>
            
            
       
        );
    
}

export default MainContent;