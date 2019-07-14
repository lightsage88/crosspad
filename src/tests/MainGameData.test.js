import React from 'react';
import MainGameData from '../components/MainGameData';
import {render} from './test-utils';

describe('<MainGameData />', ()=>{
    it('if there is no game, it will render the notice component', () => {
        const {getByTestId} = render(<MainGameData />);
        const noticeDivEl = getByTestId('noticeDivEl');
        expect(noticeDivEl).toBeInTheDocument();
    });

    //TODO: Figure out how to render stuff if there is a gameData thing present.

})





