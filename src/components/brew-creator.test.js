import React from 'react';
import { shallow } from 'enzyme';

import Creator from './brew-creator';

describe('<Creator />', () => {
  it('Renders without crashing', () => {
    shallow(<Creator />);
  });

  it('Renders an aural status update', () => {
    let TEST_STATUS = 'You are listening to a game!';
    
    let wrapper = shallow(<Creator creator={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});