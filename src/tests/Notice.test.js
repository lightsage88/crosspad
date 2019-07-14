import React from 'react';
import ReactDOM from 'react-dom';
import Notice from '../components/Notice';
import {shallow, mount} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

const context = {
    searchNoticeImages : ['sonic.gif', 'john.gif']
}

describe("<Notice />", ()=>{

    it('renders without crashing', () => {
        const wrapper = mount(<Notice />);
        // expect(wrapper.find('#noticeDiv').length).toEqual(1);
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.find('div#noticeDiv').length).toEqual(1);
    });

    it('searches', ()=>{
        const wrapper = mount(shallow(<Notice type="search"context={{searchNoticeImages: ['1']}}/>).get(0));
        expect(wrapper.exists()).toEqual(true);

        console.log(wrapper);
        console.log(wrapper.debug());
    })


})



