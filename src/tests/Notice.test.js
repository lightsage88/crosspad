import React from 'react';
import Notice from '../components/Notice';
import {render} from './test-utils';



describe("<Notice />", ()=>{

    it('renders without crashing', () => {
        const {getByTestId} = render(<Notice />);
        const noticeDivEl = getByTestId('noticeDivEl');
        expect(noticeDivEl).toBeInTheDocument();
    });

    //TODO: make tests for each of the different types of messages you can receive

    // it('searches', ()=>{
    //     const wrapper = mount(shallow(<Notice type="search"context={{searchNoticeImages: ['1']}}/>).get(0));
    //     expect(wrapper.exists()).toEqual(true);

    //     console.log(wrapper);
    //     console.log(wrapper.debug());
    // })


})



