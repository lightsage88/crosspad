import React from 'react';
import Trend from '../components/Trend';
import {render} from './test-utils';

it('renders Notice if there is no graph', () => {
    const {getByTestId} = render(<Trend />);
    const noticeDivEl = getByTestId('noticeDivEl');
    expect(noticeDivEl).toBeInTheDocument();
});


//TODO: if the trend Array does have juicy stuff, wat do?

