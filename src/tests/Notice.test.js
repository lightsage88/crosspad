import React from 'react';
import Notice from '../components/Notice';
import {Provider} from '../components/Context';
import {render} from './test-utils';
import {render as vanillaRender} from '@testing-library/react';



describe("<Notice />", ()=>{

    it('renders without crashing', () => {
        const {getByTestId} = render(<Notice />);
        const noticeDivEl = getByTestId('noticeDivEl');
        expect(noticeDivEl).toBeInTheDocument();
    });

    it('displays a different type of message each time when type is "search"', ()=> {
        const {getByTestId} = vanillaRender(<Provider><Notice type='search' /></Provider>);
        const noticeImgSearchEl = getByTestId('noticeImg-search');
        expect(noticeImgSearchEl).toBeInTheDocument();
    })

    it('displays a different type of message each time when type is "noGraph"', ()=> {
        const {getByTestId} = vanillaRender(<Provider><Notice type='noGraph' /></Provider>);
        const noticeSectionNoGraphEl = getByTestId('noticeSection-noGraph');
        expect(noticeSectionNoGraphEl).toBeInTheDocument();
    })

    it('displays a different type of message each time when type is "noGame"', ()=> {
        const {getByTestId} = vanillaRender(<Provider><Notice type='noGame' /></Provider>);
        const noticeSectionNoGameEl = getByTestId('noticeSection-noGame');
        expect(noticeSectionNoGameEl).toBeInTheDocument();
    })

    //TODO: for the actual images...what are they?

})



