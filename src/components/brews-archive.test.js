import React from 'react';
import { shallow } from 'enzyme';

import Yourbrews from './brew-archive';

describe('<Yourbrews />', () => {
    it('Renders without crashing', () => {
        shallow(<Yourbrews />);
    });
        
    it('Renders the hide-all button initially', () => {
        const wrapper = shallow(<Browser />);
        expect(wrapper.hasClass('hide-all')).toEqual(true);
    });
});