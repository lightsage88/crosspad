import React from 'react';
import ReactDOM from 'react-dom';
import MainGameData from '../components/MainGameData';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    const wrapper = shallow(<MainGameData />);
    expect(wrapper.length).toEqual(1);
});



