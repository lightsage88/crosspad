import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from '../components/Context';


const CrosspadProvider = ({children}) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}

const customRender = (ui, options) => 
    render(ui, {wrapper: CrosspadProvider, ...options})


export * from '@testing-library/react';

export {customRender as render};