import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').hasClass('snesFont')).toBe(true);
});



