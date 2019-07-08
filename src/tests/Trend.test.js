import React from 'react';
import ReactDOM from 'react-dom';
import Trend from '../components/Trend';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
 const wrapper = shallow(<Trend />);
 expect(wrapper.length).toEqual(1);
});



