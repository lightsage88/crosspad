import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import Notice from './Notice';  
import {Consumer} from './Context';

const RelatedGames = () => {
    return (
        <Consumer>
        {
            context => {
                console.log('yo');
               return (context.relatedGames).length > 0 ?  (<div>
                   <Carousel
                    activeIndex={context.carouselIndex}
                    direction={context.carouselDirection}
                    onSelect={context.actions.handleCarouselSelect}
                   >

                   </Carousel>
                </div>)
             :
            
            (<Notice type="search"/>)

            }
        }
        </Consumer>
    )
    
}


export default RelatedGames;