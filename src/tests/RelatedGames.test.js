import React from 'react';
import RelatedGames from '../components/RelatedGames';
import {render} from './test-utils';

it('if there are no related games and you do not have a gameData object thats filled, it will render the notice component', () => {
    const {getByTestId} = render(<RelatedGames />);
    const noticeDivEl = getByTestId('noticeDivEl');
    expect(noticeDivEl).toBeInTheDocument();
});

//TODO: figure out what to do for when you do have related games and a gameData name

//TODO: figure out what to do for when you do have related games BUT NO gameData name



