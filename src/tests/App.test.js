import React from 'react';
import App from '../App';
import {render} from './test-utils.js';
import { exportAllDeclaration } from '@babel/types';
import { getByTestId } from '@testing-library/react';

// import {render} from '@testing-library/react';



it('renders without crashing', () => {


 const {container, getByTestId} = render(<App />)

const appDiv = getByTestId('appDiv');

expect(appDiv).toBeInTheDocument();

});



