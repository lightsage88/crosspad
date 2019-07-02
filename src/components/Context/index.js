import React, {Component} from 'react';
import axios from 'axios';

const CrosspadContext = React.createContext();

export class Provider extends Component{

    state = {
        gameData : [],
        relatedGames : [],
        searchOptions: [],
        searchValue: ''      }
      typingTimer = null;

    render() {

        const handleTypingChange = (searchValue) => {
            clearTimeout(this.typingTimer);
            let value = searchValue;
            this.typingTimer = setTimeout(()=>{updateSearchValue(value)}, 2000);
        
        }

        const updateSearchValue = (value) => {
            console.log('updateSearchValue running with: ' + value);
            this.setState(prevState => ({
              searchValue : value 
            }));
            searchDatabaseForGame();
        }

        const searchDatabaseForGame = () => {
            console.log('searchDatabase was fired');
        
        
        //We want to start typing and have a drop down list auto populate with potential results
        //these clickable results will allow the user to zero in on exactly what they want.
        
        //We will need the:
        //id
        //name
        
        
        //later on we will need aggregated_rating,
              // cover,
              // genres,
              // involved_companies,
              // name
        
        
            axios({
              method: "POST",
              url: `${process.env.REACT_APP_IGDB_API_URL}/games/?search=${this.state.searchValue}&fields=
              name,
              id
              `, 
              headers: {
                'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                'accept': 'application/json'
              }
            })
            .then(response => {
              console.log(response);
              this.setState(prevState=>({
                searchOptions: response.data
              }));
              //We will make a call to /covers to get a url for the image of the game so
              //we can add it to state
              // this.getCoverURLFromDatabase(coverID);
              //We will do a call for each element in the 'involved_companies' array
              //until we find the one where 'publisher' evaluates to TRUE
        
                //then we will get the id from the TRUE involved_company and make a call
                //to /companies
            })
            .catch(error => {
              console.error(error)
            })
          }


        return (
            <CrosspadContext.Provider value={{
                gameData : this.state.gameData,
                relatedGames: this.state.relatedGames,
                searchOptions: this.state.searchOptions,
                searchValue: this.state.searchValue,
                typingTimer : null,
                actions: {
                    handleTypingChange: handleTypingChange,
                    updateSearchValue: updateSearchValue,
                    searchDatabaseForGame: searchDatabaseForGame

                }
            }}>
                {this.props.children}
            </CrosspadContext.Provider>
        )
    }
}


export const Consumer = CrosspadContext.Consumer;


