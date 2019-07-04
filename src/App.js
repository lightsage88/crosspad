import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
 


  // handleTypingChange = (searchValue) => {
  //   clearTimeout(this.typingTimer);
  //   let value = searchValue;
  //   this.typingTimer = setTimeout(()=>{this.updateSearchValue(value)}, 2000);

  // }


  // updateSearchValue = (value) => {
  //   console.log('updateSearchValue running with: ' + value);
  //   this.setState(prevState => ({
  //     searchValue : value 
  //   }));
  //   this.searchDatabaseForGame();
  // }

  //Of the things we will get from the game search we want
  // aggregated_rating
  // cover
  // involved_companies
  // summary
  // genres
  // name
  //To see all the possible fields in the call's return, make fields = *

//   searchDatabaseForGame = () => {
//     console.log('searchDatabase was fired');


// //We want to start typing and have a drop down list auto populate with potential results
// //these clickable results will allow the user to zero in on exactly what they want.

// //We will need the:
// //id
// //name


// //later on we will need aggregated_rating,
//       // cover,
//       // genres,
//       // involved_companies,
//       // name


//     axios({
//       method: "POST",
//       url: `${process.env.REACT_APP_IGDB_API_URL}/games/?search=${this.state.searchValue}&fields=
//       name,
//       id
//       `, 
//       headers: {
//         'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
//         'accept': 'application/json'
//       }
//     })
//     .then(response => {
//       console.log(response);
//       this.setState(prevState=>({
//         searchOptions: response.data
//       }));
//       //We will make a call to /covers to get a url for the image of the game so
//       //we can add it to state
//       // this.getCoverURLFromDatabase(coverID);
//       //We will do a call for each element in the 'involved_companies' array
//       //until we find the one where 'publisher' evaluates to TRUE

//         //then we will get the id from the TRUE involved_company and make a call
//         //to /companies
//     })
//     .catch(error => {
//       console.error(error)
//     })
//   }

  createListItemOptions = (dataArray) => {
    console.log('createListItemOptions running');

  }

  getCoverURLFromDatabase(coverID) {
    console.log('coverURLFromDatabase running');
  }


  render() {
    // const searchOptionsListItems = this.state.searchOptions.map((gameSelection, index)=>{
    //   return <li key={index} data-game-id={gameSelection.id}>
    //           <h5>{gameSelection.name}</h5>
    //         </li>
    // });
    return (
      <div className="App">
        <Navbar handleTypingChange={this.handleTypingChange} />
        {
          //game content
        }
      </div>
    );
  }
  
}

export default App;
