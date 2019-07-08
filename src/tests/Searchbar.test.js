import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../components/Searchbar';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
 const wrapper = shallow(<Searchbar />);
//  expect(wrapper.find('section').hasClass('showcase')).toEqual(false);
expect(wrapper.exists()).toBe(true);
});



