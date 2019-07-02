import React, {Component} from 'react';
import axios from 'axios';

const CrosspadContext = React.createContext();

export class Provider extends Component{

    state = {
        gameData : {},
        publisherID: '',
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
            this.typingTimer = setTimeout(()=>{updateSearchValue(value)}, 2000);
        
        }

        const updateSearchValue = (value) => {
            console.log('updateSearchValue running with: ' + value);
            this.setState(prevState => ({
              searchValue : value 
            }));
            searchDatabaseForGame();
        }

        const searchForSpecificGame = (gameID) => {
            //TODO: Set up Spinners
            //TODO: Clear input field for searching once you select a game

            console.log(gameID);
            this.setState(prevState=>({
                searchOptions: []
            }));
            axios({
                method: "POST",
                //?&filter[id][eq]=${gameID}&fields=*
                url: `${process.env.REACT_APP_IGDB_API_URL}/games/`,
                headers: {
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                    'accept': 'application/json'
                },
                data: `\nfields aggregated_rating, involved_companies, name, summary, cover; where id=${gameID};`

                
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
                        aggregated_rating: response.data[0].aggregated_rating,
                        // cover: response.data[0].cover,
                        involved_companies: response.data[0].involved_companies,
                        name: response.data[0].name,
                        summary: response.data[0].summary

                    }
                }))

                return response
            })
            .then((response)=>{
                determineCover(response);
                (this.state.gameData.involved_companies).length >= 1 ? determinePublisher() : console.log('nope');
            })
            .catch(error => {
                console.error(error);
            });
        }

        const determineCover = (response) => {
            response.data[0].cover ? seekCoverArtFromDatabase(response.data[0].cover) : this.setState(prevState=>({
                gameData: {
                    ...prevState.gameData,
                    cover: 'insert placeholder image here'
                }
            }));
        }

        //todo, determine year of release as well with game-id

        const seekCoverArtFromDatabase = (coverID) => {
            console.log('seekCoverArtFromDatabase is running to get some art for us with coverID ' + coverID);
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/covers/`,
                headers: {
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                    'accept': 'application/json'
                },
                data: `\nfields image_id, url; where game=${coverID};`
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
            });
        }

        const determinePublisher = () => {
            console.log('determinePublisher running');

            let companyArray = this.state.gameData.involved_companies;

            if(this.state.publisherID === '') {
                companyArray.forEach(company =>{
                    console.log(company)
                    sortInvolvedCompanies(company)
                });

            } else {
                console.log('we found the publisher at the id of ' + this.state.publisherID)
            }    
        }

        const sortInvolvedCompanies = (companyID) => {
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/involved_companies/`,
                headers: {
                    'accept': 'application/json',
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`
                },
                data: `\nfields publisher; where id = ${companyID};`
            })
            .then( response => {
                console.log(response);
                this.setState(prevState =>({
                    publisherID : response.data[0]
                }))
            })
            .catch(err => {
                console.error(err);
            });
        }


        // const callAPIForPublisher = (companyID) => {

        // }

        const searchDatabaseForGame = () => {
            console.log('searchDatabase was fired');
        
        
        //We want to start typing and have a drop down list auto populate with potential results
        //these clickable results will allow the user to zero in on exactly what they want.
        
        //We will need the:
        //id
        //name
        
        
        
        
        
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
                publisherID: this.state.publisherID,
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


