import React from 'react';
import MainGameData from '../components/MainGameData';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

describe('<MainGameData />', ()=>{
    it('renders without crashing', () => {
        const wrapper = shallow(<MainGameData />);
        expect(wrapper.length).toEqual(1);
    });

    // it('will show the Notice component if there is no gameData in state', ()=>{

    // })

})





