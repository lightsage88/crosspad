import React, {Component} from 'react';
import {Consumer} from './Context';
import MainGameData from './MainGameData';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const MainContent = () => {
    return (
        <Consumer>
        {
        context => {
            return(
            <div>
                <style type="text/css">
                    {`
                    .tab-flat {
                    background-color: purple;
                    color: white;
                    }

                    .tab-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab variant="flat" className="nintendoFont" eventKey="home" title="Game">
                        {
                       context.gameData.name  ? <MainGameData props={context.gameData}/> : <h1>"Wait for something cool here"</h1>
                        }
                    </Tab>
                    <Tab className="nintendoFont" eventKey="profile" title="Related">
                        <h1 className="nintendoFont">Crackle</h1>
                    </Tab>
                    <Tab className="nintendoFont" eventKey="contact" title="Trend">
                        <h1 className="nintendoFont">shit</h1>
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