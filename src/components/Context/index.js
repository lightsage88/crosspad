import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import search1 from '../../picturesForCrosspad/needSearchImages/search-1.png';
import search2 from '../../picturesForCrosspad/needSearchImages/search-2.png';
import search3 from '../../picturesForCrosspad/needSearchImages/search-3.png';
import search4 from '../../picturesForCrosspad/needSearchImages/search-4.png';
import search5 from '../../picturesForCrosspad/needSearchImages/search-5.png';
import search6 from '../../picturesForCrosspad/needSearchImages/search-6.png';
import search7 from '../../picturesForCrosspad/needSearchImages/search-7.png';
import search8 from '../../picturesForCrosspad/needSearchImages/search-8.png';
import search9 from '../../picturesForCrosspad/needSearchImages/search-9.png';
import search10 from '../../picturesForCrosspad/needSearchImages/search-10.png';
import drWright from '../../picturesForCrosspad/noGraphImages/drwright.png';
import snake from '../../picturesForCrosspad/noGraphImages/snake.png';
import drmario from '../../picturesForCrosspad/noGameImages/drmario.png';
import spiderman from '../../picturesForCrosspad/noGameImages/spiderman.gif';
import sonic from '../../picturesForCrosspad/sonic.gif';

const CrosspadContext = React.createContext();

export class Provider extends Component{

    state = {
        buttonBeingHovered: false,
        carouselDirection: null,
        carouselIndex: 0,
        gameData : {},
        isLoading: false,
        loaderImage: sonic,
        noGameSet: [
            {
            image: spiderman,
            text: "I may wear a mask, but I can clearly see there's no game here!"
            },
            {
            image: drmario,
            text: "May I prescribe some text in the search bar?"
            }
        ],
        noGraphSet: [
            {
            image: drWright,
            text: "Egads, there doesn't seem to be any data!"
            },
            {
            image: snake,
            text: "This is Snake...is data to be retrieved by OSP too?"
            }
        ],
        relatedGames : [],
        searchNoticeImages: [search1, search2,search3, search4, search5, search6, search7, search8, search9, search10],
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
            var gameList = document.querySelector('.gameButtonUL');
            gameList.style.visibility = 'visible';
        
        }

        const updateSearchValue = (value) => {
            console.log('updateSearchValue running with: ' + value);
            this.setState(prevState => ({
              searchValue : value 
            }));
            console.log(this.state.searchValue);
            if(value !== ''){
            searchDatabaseForGame();
            }
        }

        const searchDatabaseForGame = () => {
            console.log('searchDatabase was fired');
            console.log('have spinner show up now');
            loadToggle('isLoading');
            axios({
                
              method: "POST",
              url: `${process.env.REACT_APP_IGDB_API_URL}/games/?search=${this.state.searchValue}&fields=
              name,
              id
              `, 
              headers: {
                  'access-control-allow-origin': true,
                'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                'accept': 'application/json'
              }
            })
            .then(response => {
              console.log(response);
              this.setState(prevState=>({
                searchOptions: response.data
              }));
            loadToggle('stopLoading');          
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
                searchOptions: [],
                relatedGames: []
            }));
            var gameList = document.querySelector('.gameButtonUL');
            gameList.style.visibility = 'hidden';



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
                // let object = {
                //     aggregatedRating: response.data[0].aggregated_rating || "Unknown",
                //     collection: response.data[0].collection || "Unknown",
                //     gameID,
                //     name: response.data[0].name || "Unknown",
                //     // releaseDate: response.data[0].release_dates[0].y || "Unknown",
                //     summary: response.data[0].summary || "Unknown"
                // };

                // if(response.data[0].release_dates !== undefined && response.data[0].release_dates[0].y !== undefined) {
                //     object.releaseDate = response.data[0].release_dates[0].y;
                // } else {
                //     object.releaseDate = "Unknown"
                // }

                // console.log(object);
                
                this.setState(prevState=>({
                    
                    gameData: {
                        ...prevState.gameData,
                        aggregatedRating: Math.round(response.data[0].aggregated_rating) || "Unknown",
                        collection: response.data[0].collection || "Unknown",
                        gameID,
                        name: response.data[0].name || "Unknown",
                        releaseDate:  response.data[0].release_dates !== undefined && response.data[0].release_dates[0].y !== undefined ? response.data[0].release_dates[0].y : 'Unknown',
                        summary: response.data[0].summary || "Unknown"

                    }
                }))

               if(response.data[0].cover){
                determineCover(response.data[0].id, 'mainGame');
               } else {
                   this.setState(prevState => ({
                       gameData: {
                           ...prevState.gameData,
                           coverUrl: 'path to placeholder image'
                       }
                   }))
               }

               if(response.data[0].collection){
                gatherCollection(response.data[0].collection);
               } else {
                   //we need to tell user that there aren't any colelctions
                   console.log('Sorry but your princess is in another castle');
               }
                console.log(gameID);

            })
            .catch(error => {
                console.error(error);
            });

            
        }


        const determineCover =  (gameID, context, index) => {
            console.log('determineCover running with' + gameID + context);
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_IGDB_API_URL}/covers/`,
                headers: {
                    'user-key': `${process.env.REACT_APP_IGDB_KEY}`,
                    'accept': 'application/json'
                },
                data: `\nfields image_id, url; where game=${gameID};`
            })
            .then(response=>{

                //if the context is main game, we send them to another function that does 
                //state stuff for gameData
                if(context === "mainGame") {
                    handleMainGameCover(response);
                } else {
                    handleRelatedGameCover(gameID, index, response)
                }

                //if the context is not, then we send them to another function that deals with a related game
                //based on ID
            })
            .catch(err =>{
                console.error(err)
            }) 
        }


        const handleMainGameCover = (response) => {
            
            
            this.setState(prevState => ({
                gameData : {
                    ...prevState.gameData,
                    coverUrl: (response.data[0].url).replace('thumb','cover_big')
                }
            }))
        }

        const handleRelatedGameCover = (gameID, index, response) => {
            // console.log(gameID);
            // console.log(response);
            console.log(index);
            let relatedGames = [...this.state.relatedGames];
            let relatedGameObject = {...relatedGames[index]};
            relatedGameObject.coverUrl = (response.data[0].url).replace('thumb','cover_big') || 'Unknown need placeholder';
            relatedGames[index] = relatedGameObject;
            this.setState(prevState=>({
                relatedGames: [
                ...relatedGames
                ]
              

                
            }))
            
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
               //TODO: find a way to get a chronological return of gameIDs from the API
               let franchiseGameIDs = []
               franchiseGameIDs = (response.data[0].games).slice(0, 10);
               //need to cut down to a maximum of ten
               getDataForFranchiseGames(franchiseGameIDs);
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
            let franchiseArray = response.data;
            franchiseArray = franchiseArray.filter(game => {
                    return game.id !== this.state.gameData.gameID;
            });
            return franchiseArray;
        })
        .then(franchiseArray => {
            //for each member in the franchise array we are going to add
            //an object for a  game in the state's relatedGames array.
            franchiseArray.forEach(game => {
                console.log(game);
                this.setState(prevState => ({
                    relatedGames: [
                        ...prevState.relatedGames, 
                        {
                            aggregatedRating: game.aggregated_rating ? Math.round(game.aggregated_rating) : "Unknown",
                            gameID: game.id ? game.id : "Unknown",
                            coverID: game.cover ? game.cover : 'Unknown',
                            name: game.name ? game.name : 'Unknown',
                            releaseDate: game.release_dates && game.release_dates[0].y ? game.release_dates[0].y : 'Unknown'
                        }
                    ]
                }))
            })
           
        })
        .then(()=>{
            console.log(this.state);
            //for each statemember for related games, we are going to do determinecover and pass in the 
            //game's id value and cover value
            let arrayOfRelatedGames = this.state.relatedGames;
            arrayOfRelatedGames.sort(sortFranchiseGamesArray);
            arrayOfRelatedGames.forEach((game, index) => {
                determineCover(game.gameID, null, index);
            })
        })
        .catch(err => {
            console.error(err);
        });
       }

       const sortFranchiseGamesArray = (a,b) =>{
        
            // Use toUpperCase() to ignore character casing
            const yearA = a.releaseDate;
            const yearB = b.releaseDate;
          
            let comparison = 0;
            if (yearA > yearB) {
              comparison = 1;
            } else if (yearA < yearB) {
              comparison = -1;
            }
            return comparison;
          
          
       }

       const hoverIntoButton = (id, toggle) => {
            var buttonToChange = document.getElementById(id);
            if(toggle === 'red') {
            buttonToChange.classList.remove('is-primary');
            buttonToChange.classList.add('is-error');
            } else {
                buttonToChange.classList.remove('is-error');
                buttonToChange.classList.add('is-primary');
        
            }
       }

       const handleCarouselSelect = (selectedIndex, e) => {
           this.setState(prevState => ({
               index: selectedIndex,
               direction: e.direction
           }));
       }

       const playSound = (order) => {
           var sound = document.createElement("audio");
           switch(order) {
                case 'coin' :
                   sound.src = 'https://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav'
                break;
           }
           sound.play();
       }

       const loadToggle = (command) => {
           console.log(command);
           let container = document.getElementById('appContainer');
           let loader = document.getElementById('loaderDialog');
           let loaderP = document.getElementById('loaderP');
           let image = document.getElementById('loaderImg');
           if(command === "isLoading") {
              loader.classList.add('loaderActive');
              loaderP.classList.add('loaderPActive');
              container.classList.add('opacityFog');
           } else {
            image.classList.add('loaderFinished');
            setTimeout(()=>{
                image.classList.remove('loaderFinished');
                loader.classList.remove('loaderActive');
                loaderP.classList.remove('loaderPActive');
                container.classList.remove('opacityFog');
            }, 2000);

            

           }
        
       }



        return (
            <CrosspadContext.Provider value={{
                buttonBeingHovered: this.state.buttonBeingHovered,
                carouselDirection: null,
                carouselIndex: 0,
                gameData : this.state.gameData,
                isLoading: this.state.isLoading,
                loaderImage: this.state.loaderImage,
                noGameSet: this.state.noGameSet,
                noGraphSet: this.state.noGraphSet,
                relatedGames: this.state.relatedGames,
                searchNoticeImages: this.state.searchNoticeImages,
                searchOptions: this.state.searchOptions,
                searchValue: this.state.searchValue,
                typingTimer : null,
                searchBarInputBarRef: this.searchInputBarRef,
                actions: {
                    handleCarouselSelect: handleCarouselSelect,
                    handleTypingChange: handleTypingChange,
                    hoverIntoButton: hoverIntoButton,
                    playSound: playSound,
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


