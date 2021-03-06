import React from 'react';
import MainContent from '../components/MainContent';
import {render} from './test-utils';
import {render as vanillaRender} from '@testing-library/react';


describe('<MainContent />', ()=> {

    it('renders without crashing', ()=>{
        const {getByTestId} = render(<MainContent />);
        const mainContentDivEl = getByTestId('mainContentDivEl');
        expect(mainContentDivEl).toBeInTheDocument();
    });

    it('will have a tab for "Game" to begin with class "active"', ()=>{
        const {getByTestId, getByText} = render(<MainContent />);
        const mainContentGameTabEl = getByText('Game');
        expect(mainContentGameTabEl).toBeInTheDocument()
        expect(mainContentGameTabEl).toHaveTextContent("Game");
        expect(mainContentGameTabEl).toHaveClass('active');
    })

    it('will have a disabled "Results" tab if the searchOptions are empty', ()=>{
        const {getByTestId, getByText} = render(<MainContent />);
        const mainContentResultsTabEl = getByText('Results');
        expect(mainContentResultsTabEl).toBeInTheDocument()
        expect(mainContentResultsTabEl).toHaveTextContent("Results");
        expect(mainContentResultsTabEl).toHaveClass('disabled');
    })

    it('will have tabs for "Related", "Trend""', ()=>{
        const {getByText} = render(<MainContent />);
        const mainContentRelatedTabEl = getByText('Related');
        const mainContentTrendTabEl = getByText('Trend');
        expect(mainContentRelatedTabEl).toBeInTheDocument()
        expect(mainContentTrendTabEl).toBeInTheDocument()
        expect(mainContentRelatedTabEl).toHaveTextContent("Related");
        expect(mainContentTrendTabEl).toHaveTextContent('Trend');

    })

    it('will have the "Results" tab active if there is at least one searchOptions element', ()=>{
        const {getByTestId, getByDisplayValue, getByText} = render(
        <MainContent 
            searchOptions={
                [
                    {
                        id: 1025,
                        name: "Zelda II: The Adventure of Link"
                    }
                ]
            }
         
        />);
         const container = document.body;
         const MainContentResultsTabEl = getByText("Results");
         expect(MainContentResultsTabEl).toBeInTheDocument();   
         expect(MainContentResultsTabEl).toHaveClass('active');

    })

})




