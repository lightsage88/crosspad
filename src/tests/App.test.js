import React from 'react';
import App from '../App';
import {render} from './test-utils.js';


it('renders without crashing', () => {
const {getByTestId} = render(<App />)
const appDiv = getByTestId('appDiv');
expect(appDiv).toBeInTheDocument();
});



