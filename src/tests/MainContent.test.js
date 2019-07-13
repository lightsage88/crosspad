import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from '../components/MainContent';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper.length).toEqual(1);
});



