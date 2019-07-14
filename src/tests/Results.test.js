import React from 'react';
import {Provider} from '../components/Context';
import Results from '../components/Results';
import {shallow, mount} from 'enzyme';


describe('Results', ()=>{

    it('renders without crashing', ()=>{
        const wrapper = shallow(<Results />);
        expect(wrapper.length).toEqual(1);
    })
})