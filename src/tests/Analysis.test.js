import React from 'react';
import Analysis from '../components/Analysis';
import {Provider} from '../components/Context';
import {render} from './test-utils';
import {render as vanillaRender} from '@testing-library/react';



describe("<Analysis />", ()=>{

    it('renders without crashing', () => {
        const {getByTestId} = render(<Analysis />);
        const analysisDivEL = getByTestId('analysisDivEL');
        expect(analysisDivEL).toBeInTheDocument();
        const analysisReadoutEL = getByTestId('analysisReadoutEL');
        expect(analysisReadoutEL).toBeInTheDocument();
    });

   it('tells you the franchise name and its approval rating as a percent', ()=>{
    const {getByTestId} = render(<Analysis franchiseName="Metal Gear Solid" score="100" total="100"/>);
    const analysisDivEL = getByTestId('analysisDivEL');
    expect(analysisDivEL).toBeInTheDocument();
    const analysisReadoutEL = getByTestId('analysisReadoutEL');
    expect(analysisReadoutEL).toBeInTheDocument();
    expect(analysisReadoutEL).toHaveTextContent("The Metal Gear Solid franchise has a 100% approval rating.")
   })
})



