import React from 'react';
import sonic from '../picturesForCrosspad/sonic.gif';
import {Provider} from '../components/Context';
import Loader from '../components/Loader';
import {shallow, mount} from 'enzyme';

const context = {
    loaderImage: sonic
};




describe('Loader', () => {
    it('renders without crashing', () => {
    
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('#loaderDialog').exists()).toEqual(false);
    
    });

        
    


    it('sonic', ()=> {
        const wrapper = mount(<Provider context={context}><Loader /></Provider>);
        expect(wrapper.find('img#loaderImg').length).toEqual(1);
        expect(wrapper.find('img#loaderImg').html()).toEqual(`<img id="loaderImg" src="sonic.gif">`);
    })
})




