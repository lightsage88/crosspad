import React from 'react';
import Header from '../components/Header';
import {render} from './test-utils';
import { exportAllDeclaration } from '@babel/types';

describe('<Header />', ()=>{

  it('renders w/o crashing', ()=>{
    const {getByTestId} = render(<Header/>);
    const headerDivEl = getByTestId("headerDivEl");
    expect(headerDivEl).toBeInTheDocument();
  });


})








