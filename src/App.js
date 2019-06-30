import React, {Component} from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {

  }


  searchDatabase = () => {
    console.log('searchDatabase was fired');

    axios(`${process.env.REACT_APP_IGDB_API_URL}/games`, {
      method: "POST",
      headers: {
        'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
        'accept': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error)
    })

  }


  render() {
    this.searchDatabase();
    return (
      <div className="App">
        <Navbar />
        {
          //game content
        }
      </div>
    );
  }
  
}

export default App;
