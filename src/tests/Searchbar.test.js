import React from 'react';
import App from '../App';
import Searchbar from '../components/Searchbar';
import {render, fireEvent, prettyDOM, wait} from './test-utils';



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

    it('it has a search button and it changes styles depending on input text being present ', ()=>{
        const {getByTestId} = render(<App />);
        const searchBarInputEl = getByTestId('searchBarInputEl');
        const searchBarButtonEL = getByTestId('searchBarButtonEL');
        expect(searchBarButtonEL).toBeInTheDocument();
        expect(searchBarButtonEL).toHaveClass('is-disabled');
        const valueToInput = "Spider-Man";
        expect(searchBarInputEl).toBeInTheDocument();
        fireEvent.change(searchBarInputEl, {target: {value: valueToInput } })
        expect(searchBarInputEl.value).toEqual('Spider-Man');
        expect(searchBarButtonEL).toHaveClass('is-success');
        expect(searchBarButtonEL).not.toHaveClass('is-disabled');
    });

    it('when you press the search button, the loader component will appear', ()=>{
       
        
        const {getByTestId} = render(<App />);
        const searchBarInputEl = getByTestId('searchBarInputEl');
        const searchBarButtonEL = getByTestId('searchBarButtonEL');
        expect(searchBarButtonEL).toBeInTheDocument();
        expect(searchBarButtonEL).toHaveClass('is-disabled');
        const valueToInput = "Spider-Man";
        expect(searchBarInputEl).toBeInTheDocument();
        fireEvent.change(searchBarInputEl, {target: {value: valueToInput } })
        expect(searchBarInputEl.value).toEqual('Spider-Man');
        expect(searchBarButtonEL).toHaveClass('is-success');
        expect(searchBarButtonEL).not.toHaveClass('is-disabled');

        //TODO: We need a test for the dialog to be in the DOM and to have
        //either the sonic or metal sonic present

        const loaderDialogEl = getByTestId('loaderDialogEl');
        fireEvent.click(getByTestId('searchBarButtonEL'));


        expect(loaderDialogEl).toBeInTheDocument();
        // expect(loaderDialogEl).toHaveClass('loaderActive');
        // expect(axiosMock.post).toBeCalledTimes(1);
        
    })



});





