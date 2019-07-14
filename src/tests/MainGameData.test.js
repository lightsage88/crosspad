import React from 'react';
require('../components/Context/index.js');
import {Provider} from '../components/Context';
import MainGameData from '../components/MainGameData';
import {shallow, mount, render} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

describe('<MainGameData />', ()=>{
    it('renders without crashing', () => {
        const wrapper = shallow(<MainGameData />);
        expect(wrapper.length).toEqual(1);
    });

    // it('will show the Notice component if there is no gameData in state', ()=>{ 
    //     const wrapper = mount(<Provider context={{gameData: {name: "Mario"}}}><MainGameData context={{gameData: {name: "Mario"}}}/></Provider>).renderProp('context')();
    //     wrapper.update();
    //     console.log(wrapper.debug());
    //     expect(wrapper.find('div#noticeDiv').length).toEqual(0);
    // })
    it('dont quit', ()=>{
        const Pro = Provider;
        const wrapper = mount(<MainGameData />, {
            wrappingComponent: Pro,
        });
        const provider = wrapper.getWrappingComponent();
        provider.setProps({context: {gameData : {name: "Joe"}}})
        console.log(provider);
        console.log(wrapper);
        console.log(wrapper.debug())
    })

    //Will need to follow up with UI testing :/

})





