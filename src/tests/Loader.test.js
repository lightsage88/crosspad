import React from 'react';
import Loader from '../components/Loader';
import {render} from './test-utils';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', ()=>{
    const {getByTestId} = render(<Loader />);
    const loaderDialogEl = getByTestId('loaderDialogEl');
    expect(loaderDialogEl).toBeInTheDocument();
});

it('renders one of several images in #loaderImg', ()=>{
    const {getByTestId} = render(<Loader />);
    const imgEl = getByTestId('loaderImgEl');
    expect(imgEl.src).toBe('http://localhost/sonic.gif');
})

it('renders "LOADING"', ()=>{
    const {getByTestId} = render(<Loader />);
    const loaderPEL = getByTestId('loaderPEL');
    expect(loaderPEL).toHaveTextContent('LOADING');
})




//TODO: add a test for when there is an error!!!!





