import React from 'react';
import Notice from '../components/Notice';
import {render} from './test-utils';



describe("<Notice />", ()=>{

    it('renders without crashing', () => {
        const {getByTestId} = render(<Notice />);
        const noticeDivEl = getByTestId('noticeDivEl');
        expect(noticeDivEl).toBeInTheDocument();
    });

    it('displays a different type of message each time', ()=> {
        expect(1).toBe(2);
    })

    //TODO: 

})



