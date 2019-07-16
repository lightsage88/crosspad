import React from 'react';
import Results from '../components/Results';
import {Provider} from '../components/Context';
import {render} from './test-utils';
import { render as vanillaRender } from '@testing-library/react';


describe('Results', ()=>{

    it('renders without crashing', ()=>{
        const {getByTestId} = render(<Results />);
        const resultsUlEl = getByTestId('resultsUlEl');
        expect(resultsUlEl).toBeInTheDocument();
    });

    it('makes a list of buttons to press if searchOptions is populated', ()=> {
        const {getByTestId} = vanillaRender(
            <Provider>
                <Results searchOptions={
                    [
                        {
                            id: 9602,
                            name: "Super Smash Bros. for Wii U"
                        },
                        {
                            id: 9621,
                            name: "Super Smash Bros. for Nintendo 3DS"
                        },
                        {
                            id: 90101,
                            name: "Super Smash Bros. Ultimate"
                        },
                        {
                            id: 45598,
                            name: "Super Smash TV"
                        },
                        {
                            id: 19117,
                            name: "Super Smash T.V."
                        },
                        {
                            id: 1626,
                            name: "Super Smash Bros."
                        },
                        {
                            id: 14247,
                            name: "Super Smash Flash 2"
                        },
                        {
                            id: 1628,
                            name: "Super Smash Bros. Brawl"
                        },
                        {
                            id: 1627,
                            name: "Super Smash Bros. Melee"
                        }
                    ]
                }/>
            </Provider>
        );

        const resultsLI0 = getByTestId('resultsLI-0');
        expect(resultsLI0).toBeInTheDocument();
        expect(resultsLI0).toHaveClass('liButtonWrapper');
                const resultsButton0 = getByTestId('resultsButton-0');
                expect(resultsButton0).toBeInTheDocument();
                expect(resultsButton0).toHaveTextContent("Super Smash Bros. for Wii U");

        const resultsLI1 = getByTestId('resultsLI-1');
        expect(resultsLI1).toBeInTheDocument();
        expect(resultsLI1).toHaveClass('liButtonWrapper');
                const resultsButton1 = getByTestId('resultsButton-1');
                expect(resultsButton1).toBeInTheDocument();
                expect(resultsButton1).toHaveTextContent("Super Smash Bros. for Nintendo 3DS");

        const resultsLI2 = getByTestId('resultsLI-2');
        expect(resultsLI2).toBeInTheDocument();
        expect(resultsLI2).toHaveClass('liButtonWrapper');
                const resultsButton2 = getByTestId('resultsButton-2');
                expect(resultsButton2).toBeInTheDocument();
                expect(resultsButton2).toHaveTextContent("Super Smash Bros. Ultimate");

        const resultsLI3 = getByTestId('resultsLI-3');
        expect(resultsLI3).toBeInTheDocument();
        expect(resultsLI3).toHaveClass('liButtonWrapper');
                const resultsButton3 = getByTestId('resultsButton-3');
                expect(resultsButton3).toBeInTheDocument();
                expect(resultsButton3).toHaveTextContent("Super Smash TV");

        

    })

    //TODO: it('makes a list of buttons if context.searchOptions is populated', ()=>{
        
   
    // })


})