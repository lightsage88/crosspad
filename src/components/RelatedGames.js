import React from 'react';
import { Card, CardImg, CardTitle, CardDeck, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import Notice from './Notice';  
import {Consumer} from './Context';

const RelatedGames = (props) => {

    const generateCards = (props) => {
        const cardItems = props.relatedGames.map((game, index) =>{
            return <div key={index}>
            <Card data-testid={'game-'+ index}>
                <CardImg src={game.coverUrl} alt={game.name + ' cover'}/>
                <CardBody>
                    <CardTitle>{game.name}</CardTitle>
                    <CardText>{game.releaseDate}</CardText>
                </CardBody>
    
            </Card>
            
            </div>
        });
        return cardItems

    }
    

    return ( 
             (props.relatedGames.length === 0 && props.gameData.name !== undefined ? (
                    
                    <h3>Hmm...your game must be one of a kind!</h3>

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

export default RelatedGames;