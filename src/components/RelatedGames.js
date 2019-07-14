import React from 'react';
import { Card, CardImg, CardTitle, CardDeck, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import Notice from './Notice';  
import {Consumer} from './Context';

const RelatedGames = () => {
    return (
        <Consumer>
        {
            context => {
                

                const cardItems = (context.relatedGames).map((game, index) =>{
                    return <div key={index}>
                    <Card >
                        <CardImg src={game.coverUrl} alt={game.name + ' cover'}/>
                        <CardBody>
                            <CardTitle>{game.name}</CardTitle>
                            <CardText>{game.releaseDate}</CardText>
                        </CardBody>

                    </Card>
                    
                    </div>
                })
               return (context.relatedGames).length > 0 ?  (
                  

                   <CardDeck>
                    {cardItems}
                   </CardDeck>
                )
                :
             (context.relatedGames).length === 0 && context.gameData !== {} ? (
                    
                    <h3>Hmm...your game must be one of a kind!</h3>

             )
              
             :
            
            (<Notice type="search"/>)

            }
        }
        </Consumer>
    )
    
}


export default RelatedGames;