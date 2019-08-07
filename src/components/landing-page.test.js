import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './landing-page';

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPage />);
  });

//  it('Renders an aural status update', () => {
//    let TEST_STATUS = 'You are listening to a game!';
//    
//    let wrapper = shallow(<LandingPage landingPage={TEST_STATUS} />);
//    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
//  });
});
