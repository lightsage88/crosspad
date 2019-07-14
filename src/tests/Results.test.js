import React from 'react';
import {Provider} from '../components/Context';
import Results from '../components/Results';
import {shallow, mount, render, dive} from 'enzyme';


describe('Results', ()=>{

    it('renders without crashing', ()=>{
        const wrapper = shallow(<Results />);
        expect(wrapper.length).toEqual(1);
    });

    it('makes a list of buttons if context.searchOptions is populated', ()=>{
        const context = {
            searchOptions: ['Mario', 'Zelda','Sonic']
        };

        const wrapper = render(<Provider value={{searchOptions: ['Mario']}}><Results /></Provider>,);
        console.log(<Provider />)

        console.log(wrapper);
        expect(wrapper.find('ul.gameButtonUL').length).toEqual(1);
        
        // expect(wrapper.find('li').html()).not.toEqual("Mario");
        //TODO: will have to cover this with UI testing
    })
})