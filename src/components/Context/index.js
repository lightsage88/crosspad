import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

const CrosspadContext = React.createContext();

export class Provider extends Component{

    state = {
        currentDate: moment().format('M D Y'),
        gameData : {},
        relatedGames : [],
        searchOptions: [],
        searchValue: ''      
    };
    typingTimer = null;

    searchInputBarRef = React.createRef();

    render() {

        const handleTypingChange = (searchValue) => {
            clearTimeout(this.typingTimer);
            let value = searchValue;
            this.typingTimer = setTimeout(()=>{updateSearchValue(value)}, 900);
        
        }

        const updateSearchValue = (value) => {
            console.log('updateSearchValue running with: ' + value);
            this.setState(prevState => ({
              searchValue : value 
            }));
            console.log(this.state.searchValue);
            searchDatabaseForGame();
        }

        const searchDatabaseForGame = () => {
            console.log('searchDatabase was fired');
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
            })
            .catch(error => {
              console.error(error)
            })
          }


        //This gets fired when you click on a game name
        const searchForSpecificGame = (gameID) => {
           
            //TODO: Set up Spinners
            //TODO: Clear input field for searching once you select a game

            console.log(gameID);
            this.setState(prevState=>({
                searchOptions: []
            }));
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/games/`,
                headers: {
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                    'accept': 'application/json'
                },
                data: `\nfields aggregated_rating, release_dates.y, collection, name, summary, cover; where id=${gameID};`

                
            })
            .then(response =>{
                console.log(response);
                //We need to do an async call and wait for investigations about the
                //involved_companies to resolve
                
                //if there is a cover variable get it and do an async call, if not, make the cover in state be a 
                //placeholder image
                
                this.setState(prevState=>({
                    
                    gameData: {
                        ...prevState.gameData,
                        aggregatedRating: response.data[0].aggregated_rating,
                        collection: response.data[0].collection,
                        gameID,
                        name: response.data[0].name,
                        releaseDate: response.data[0].release_dates[0].y,
                        summary: response.data[0].summary

                    }
                }))
                determineCover(response);
                gatherCollection(response.data[0].collection);
                console.log(gameID);

            })
            .catch(error => {
                console.error(error);
            });

            
        }



        

        const determineCover =  (response, context) => {
            response.data[0].cover ? axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/covers/`,
                headers: {
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                    'accept': 'application/json'
                },
                data: `\nfields image_id, url; where game=${response.data[0].cover};`
            })
            .then(response=>{
                console.log(response);
                this.setState(prevState=>({
                    gameData: {
                        ...prevState.gameData,
                        cover: ((response.data).length >= 1  && response.data[0].url ? response.data[0].url : 'placeholderCoverImage')
                    }
                }));
            })
            .catch(err =>{
                console.error(err)
            }) : 
            this.setState(prevState=>({
                gameData: {
                    ...prevState.gameData,
                    cover: 'insert placeholder image here'
                }
            }));
        }

       const gatherCollection = (collectionID) => {
           axios({
               method: "POST",
               url: `${process.env.REACT_APP_IGDB_API_URL}/collections`,
               headers: {
                   "accept": "application/json",
                   "user-key": `${process.env.REACT_APP_IGDB_KEY}`
               },
               data: `\nfields name, games; where id = ${collectionID};`
           })
           .then(response => {
               console.log(response);
               let franchiseGameIDs = []
               franchiseGameIDs = response.data[0].games;
               getDataForFranchiseGames(franchiseGameIDs);
               console.log(franchiseGameIDs);
               this.setState(prevState => ({
                gameData: {
                    ...prevState.gameData,
                    franchiseName: response.data[0].name
                }
               }));
           })
           .catch(err => {
               console.error(err);
           });
       }

       const getDataForFranchiseGames = (franchiseGameIDs) => {
        let franchiseGameIDString = franchiseGameIDs.toString();
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_IGDB_API_URL}/games/`,
            headers: {
                "accept": "application/json",
                "user-key": `${process.env.REACT_APP_IGDB_KEY}`
            },
            data: `\n fields name, cover, release_dates.y, summary, aggregated_rating; where id = (${franchiseGameIDString});`
        })
        .then(response => {
            console.log(response);
            let franchiseArray = response.data;
            console.log(franchiseArray);
            franchiseArray = franchiseArray.filter(game => {
                    return game.id !== this.state.gameData.gameID;
            });
            console.log(franchiseArray);
            console.log(this.state.gameData);


        })
        .catch(err => {
            console.error(err);
        });
       }



        return (
            <CrosspadContext.Provider value={{
                currentDate: this.state.currentDate,
                gameData : this.state.gameData,
                relatedGames: this.state.relatedGames,
                searchOptions: this.state.searchOptions,
                searchValue: this.state.searchValue,
                typingTimer : null,
                searchBarInputBarRef: this.searchInputBarRef,
                actions: {
                    handleTypingChange: handleTypingChange,
                    updateSearchValue: updateSearchValue,
                    searchDatabaseForGame: searchDatabaseForGame,
                    searchForSpecificGame: searchForSpecificGame

                }
            }}>
                {this.props.children}
            </CrosspadContext.Provider>
        )
    }
}


export const Consumer = CrosspadContext.Consumer;


