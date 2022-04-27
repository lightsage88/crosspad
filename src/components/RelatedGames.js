import React from 'react';
import { Card, CardImg, CardTitle, CardDeck, CardText,
    CardBody } from 'reactstrap';
import Notice from './Notice';  

const RelatedGames = (props) => {

    const generateCards = (props) => {
        const cardItems = props.relatedGames.map((game, index) =>{
            return <div key={index}>
            <Card data-testid={'game-'+ index}>
                <CardImg data-testid={'gameImage-' + index} src={game.coverUrl} alt={game.name + ' cover'}/>
                <CardBody>
                    <CardTitle data-testid={'gameTitle-' + index }>{game.name}</CardTitle>
                    <CardText data-testid={'gameReleaseDate-' + index}>{game.releaseDate}</CardText>
                </CardBody>
    
            </Card>
            
            </div>
        });
        return cardItems

    }
    

    return ( 
             (props.relatedGames.length === 0 && props.gameData.name !== undefined ? (
                    
                    <h3 data-testid="noOtherGamesEl">Hmm...your game must be one of a kind!</h3>

             )

             : (props.relatedGames).length > 0 ?  (
                  

                <CardDeck>
                 {generateCards(props)}
                </CardDeck>
             )
             
              
             :
            
            (<Notice type="search"/>)

            
        
    )
    
    )}

    //setup default bogie props
    RelatedGames.defaultProps = {
        relatedGames:[],
        gameData: {
            name: undefined
        }
    }

export default RelatedGames;