import React from 'react';
import { shallow, mount } from 'enzyme';

import Browser from './browser';

describe('<Browser />', () => {
    it('Renders without crashing', () => {
        shallow(<Browser />);
    });
        
//    it('Renders the search button initially', () => {
//        const wrapper = shallow(<Browser />);
//        expect(wrapper.hasClass('search')).toEqual(true);
//    });
        
//    it('Should fire the onSubmit callback when the form is submitted', () => {
//        const callback = jest.fn();
//        const wrapper = mount(<Browser onSubmit={callback} />);
//        const value = 'Test';
//        wrapper.instance().setEditing(true);
//        wrapper.upadate();
//        wrapper.find(input[type='text']).instace().value = value;
//        wrapper.simulate('submit');
//        expect(callback).toHaveBeenCalledWtih(value);
//    });
//        
//    it('Should not fire onSubmit if the input is empty', () => {
//        const callback = jest.fn();
//        const wrapper = mount(<Browser onSubmit={callback} />);
//        wrapper.instance().setEditing(true);
//        wrapper.simulate('submit');
//        expect(callback).not.toHaveBeenCalled();
//    });
});