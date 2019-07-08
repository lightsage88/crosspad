import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../components/Loader';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('#loaderDialog').exists()).toEqual(false);

    //TODO: This needs to actually have some stand in for context, this is not a true test that is actually correct!!!
});



