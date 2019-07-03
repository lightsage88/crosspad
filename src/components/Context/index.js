import React, {Component} from 'react';
import axios from 'axios';

const CrosspadContext = React.createContext();

export class Provider extends Component{

    state = {
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
            this.setState(prevState=>({
                gameData: {
                    ...prevState.gameData,
                    publisherID: '',
                    involved_companies: []
                }
            }));
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

                determineCover(response);

                if((this.state.gameData.involved_companies).length >= 1) {
                    determinePublisher(response)
                }
            })
            .then(()=>{
                getRelatedGamesInfo();
            })
            .catch(error => {
                console.error(error);
            });

            
        }


        const getRelatedGamesInfo = () => {
            console.log(this.state);
        }

        const stateCheck = () => {
            console.log(this.state);
        }

        const determineCover =  (response) => {
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

        //todo, determine year of release as well with game-id


        const determinePublisher = (response) => {
            console.log('determinePublisher running');

            let companyArray = response.data[0].involved_companies;

            if(this.state.gameData.publisherID === '') {
                companyArray.forEach(company =>{
                    console.log(company);
                    sortInvolvedCompanies(company, companyArray.length)
                });

            } else {
                console.log('we found the publisher at the id of ' + this.state.gameData.publisherID);
            }    
           
        }

        const sortInvolvedCompanies = (companyID, arrayLength) => {
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/involved_companies/`,
                headers: {
                    'accept': 'application/json',
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`
                },
                data: `\nfields publisher, company; where id = ${companyID};`
            })
            .then( response => {
                console.log(response);
                if(response.data[0].publisher || arrayLength == 1) {
                    console.log('the sortIC found' + response.data[0].company);
                    this.setState(prevState =>({
                        gameData: {
                            ...prevState.gameData,
                            publisherID : response.data[0].company

                        }
                    }));
                    getPublisherName(response.data[0].company);
                }
            })
            .catch(err => {
                console.error(err);
            });
        }

        const getPublisherName = (publisherID) => {
            console.log(publisherID);
            console.log('publisgername dfsdfsdf');
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/companies/`,
                headers: {
                    "accept": "application/json",
                    "user-key": `${process.env.REACT_APP_IGDB_KEY}`
                },
                //TODO: get logos involved, will just leave value here for now
                data: `\n fields name,logo; where id=${publisherID};`
            })
            .then(response =>{
                console.log(response);
                this.setState(prevState =>({
                    gameData: {
                        ...prevState.gameData,
                        publisherName: response.data[0].name
                    }
                }))
            })
            .catch(err=>{
                console.error(err);
            });
        }

        


        // const callAPIForPublisher = (companyID) => {

        // }




        return (
            <CrosspadContext.Provider value={{
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


