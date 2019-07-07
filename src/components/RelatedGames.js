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
                console.log('yo');
                {/* const carouselItems = (context.relatedGames).map((game, index) =>{
                    return <div key={index}>
                    <Carousel.Item >
                        <img src={game.coverUrl} alt={game.name + ' cover'}/>

                    </Carousel.Item>
                    <Carousel.Caption>
                        <h3>{game.name}</h3>
                    </Carousel.Caption>
                    </div>
                }) */}

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
            
            (<Notice type="search"/>)

            }
        }
        </Consumer>
    )
    
}


export default RelatedGames;