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

        const wrapper = mount(<Provider value={{searchOptions: ['Mario']}}><Results /></Provider>);
        // console.log(<Provider value={{searchOptions: ['Mario']}}/>);
        // console.log(<Provider value={{searchOptions: ['Mario']}}><Results context={'./Provider'.props}/></Provider>);

        // console.log(wrapper);
        expect(wrapper.find('ul.gameButtonUL').length).toEqual(1);
        
        // expect(wrapper.find('li').html()).not.toEqual("Mario");
        //TODO: will have to cover this with UI testing
    })

    // it('does', ()=>{
    //     const outer = mount(
    //     <Provider >
    //         <Results />
    //     </Provider>
    //     );
    //     console.log(outer);

    //     const Children = outer.prop('children');
    //     console.log(Children);

    //     const wrapper = mount(<Children context={{searchOptions: ["Mario"]}}/>);
    //     console.log(wrapper);
    //     console.log(wrapper.debug());
    //     // expect(wrapper.find('ul.gameButtonUL').length).toBe(1);

    // })

    // it('persists', ()=>{

    // })


})