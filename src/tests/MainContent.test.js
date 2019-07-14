import React from 'react';
import MainContent from '../components/MainContent';
import {render} from './test-utils';


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

    // TODO: it('will have the "Results" tab active if there is at least one searchOptions element', ()=>{
    //     let context = {
    //         searchOptions: ['Super Smash Bros. Ultimate']
    //     }
    //     const wrapper = render(
    //         <Provider value={{searchOptions: ['1']}}>
    //             <MainContent />
    //         </Provider>)

    //         console.log(wrapper.find('a.nav-item'));
            
    //     expect(wrapper.find('a.nav-item.nav-link.active').text()).toBe('Resssslts');

    // })


})




