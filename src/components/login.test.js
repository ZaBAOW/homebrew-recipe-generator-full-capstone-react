import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Login from './login';

describe('<Login />', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });
});

    