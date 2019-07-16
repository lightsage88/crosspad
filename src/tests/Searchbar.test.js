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

    it('fires the handleTypingChange func with the val as its argument when you type', ()=>{
        const {getByTestId} = render(<Searchbar />);
        const searchBarInputEl = getByTestId('searchBarInputEl');
        const valueToInput = "Spider-Man";
        expect(searchBarInputEl).toBeInTheDocument();
        fireEvent.change(searchBarInputEl, {target: {value: valueToInput } })
        expect(searchBarInputEl.value).toEqual('Spider-Man');
    });

});





