import React from 'react';
import RelatedGames from '../components/RelatedGames';
import App from '../App';
import {render} from './test-utils';
import {render as vanillaRender, prettyDOM} from '@testing-library/react';
import { Context, Provider, Consumer } from '../components/Context';
import { jsxEmptyExpression } from '@babel/types';

it('if there are no related games and you do not have a gameData object thats filled, it will render the notice component', () => {
    const {getByTestId} = render(<RelatedGames />);
    const noticeDivEl = getByTestId('noticeDivEl');
    expect(noticeDivEl).toBeInTheDocument();
});

//TODO: figure out what to do for when you do have related games and a gameData name
it('has related games and a name for the main game', ()=>{
   const {getByTestId} = vanillaRender(
   <RelatedGames 
    relatedGames={
        [
            {
                aggregatedRating: 85,
                coverID: 69452,
                coverUrl: "//images.igdb.com/igdb/image/upload/t_cover_big/co1hl8.jpg",
                gameID: 3192,
                name: "Sonic the Hedgehog",
                releaseDate: 1991
            }
        ]
        } 
   />)

   
    const gameCardEl = getByTestId('game-0');
    expect(gameCardEl).toBeInTheDocument();


})
//TODO: figure out what to do for when you do have related games BUT NO gameData name



