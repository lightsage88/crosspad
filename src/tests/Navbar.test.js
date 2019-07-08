import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('#navbarDiv').length).toEqual(1);
});



