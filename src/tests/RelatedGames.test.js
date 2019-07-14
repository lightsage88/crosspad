import React from 'react';
import ReactDOM from 'react-dom';
import RelatedGames from '../components/RelatedGames';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    const wrapper = shallow(<RelatedGames />);
    // expect(wrapper.find('#noticeDiv').length).toEqual(1);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('div#noticeDiv').length).toEqual(1);
});



