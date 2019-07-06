import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class MainContent extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <h1>Pop</h1>
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <h1>Crackle</h1>
  </Tab>
  <Tab eventKey="contact" title="Contact">
    <h1>shit</h1>
  </Tab>
</Tabs>
            </div>
        );
    }
}

export default MainContent;