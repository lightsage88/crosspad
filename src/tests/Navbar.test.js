import React from 'react';
import Navbar from '../components/Navbar';
import {render} from './test-utils';

it('renders without crashing', ()=>{
    const {getByTestId} = render(<Navbar />);
    const navbarDivEl = getByTestId('navbarDivEl');
    expect(navbarDivEl).toBeInTheDocument();
});

