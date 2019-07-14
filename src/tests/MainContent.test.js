import React from 'react';
import {Provider} from '../components/Context';
import MainContent from '../components/MainContent';
import {shallow, mount} from 'enzyme';


describe('<MainContent />', ()=> {

    it('renders without crashing', () => {
        const wrapper = shallow(<MainContent />);
        expect(wrapper.length).toEqual(1);
    });

    it('will have an active tab for "Game" to start off', ()=>{
        let context = {
            searchOptions: []
        }
        const wrapper = mount(
            <Provider context={context}>
                <MainContent />
            </Provider>)
        expect(wrapper.find('a.nav-item.nav-link.active').text()).toBe('Game');

    })

    it('will have a disabled tab if the searchOptions are empty', ()=>{
        let context = {
            searchOptions: []
        }
        const wrapper = mount(
            <Provider context={context}>
                <MainContent />
            </Provider>)
        expect(wrapper.find('a.nav-item.nav-link.disabled').text()).toBe('Results');
    })

    it('will have tabs for "Game", "Related", "Trend", and "Results"', ()=>{
        let context = {
            searchOptions: []
        }
        const wrapper = mount(
            <Provider context={context}>
                <MainContent />
            </Provider>)
        expect(wrapper.find('a[data-rb-event-key="results"]').text()).toBe('Results');
        expect(wrapper.find('a[data-rb-event-key="game"]').text()).toBe('Game');
        expect(wrapper.find('a[data-rb-event-key="related"]').text()).toBe('Related');
        expect(wrapper.find('a[data-rb-event-key="trend"]').text()).toBe('Trend');

    })

    // it('will have the "Results" tab active if there is at least one searchOptions element', ()=>{
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




