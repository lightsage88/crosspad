import React from 'react';
import Results from '../components/Results';
import {render} from './test-utils';


describe('Results', ()=>{

    it('renders without crashing', ()=>{
        const {getByTestId} = render(<Results />);
        const resultsUlEl = getByTestId('resultsUlEl');
        expect(resultsUlEl).toBeInTheDocument();
    });

    it('makes a list of buttons to press if searchOptions is populated', ()=> {
        expect(1).toBe(2);
    })

    //TODO: it('makes a list of buttons if context.searchOptions is populated', ()=>{
        
   
    // })


})