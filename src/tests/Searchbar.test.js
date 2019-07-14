import React from 'react';
import Searchbar from '../components/Searchbar';
import {render, fireEvent} from './test-utils';
import {Provider} from '../components/Context';
import axiosMock from 'axios';
import { exportAllDeclaration } from '@babel/types';
import { get } from 'http';
import { waitForDomChange, waitForElement } from '@testing-library/react';



describe("<Searchbar />", ()=>{

    it('renders without crashing', ()=>{
        const {getByTestId} = render(<Searchbar />);
        const searchBarSectionEl = getByTestId('searchBarSectionEl');
        expect(searchBarSectionEl).toBeInTheDocument();
    });

    it('fires the handleTypingChange func with the val as its argument when you type', async ()=>{
        const {getByTestId} = render(<Searchbar/>);
        const searchBarInputEl = getByTestId('searchBarInputEl');
        expect(searchBarInputEl).toBeInTheDocument();
        fireEvent.keyUp(searchBarInputEl, {key: 'X', code: 88});

        const searchBarWithText = await waitForElement(()=>
            getByTestId('searchBarInputEl')
        )



        //TODO expect(getByTestId('searchBarInputEl')).toHaveTextContent('x');
    })

});





