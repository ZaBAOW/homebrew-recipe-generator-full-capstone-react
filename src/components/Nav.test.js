import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
    it('Renders without crashing', () => {
        shallow(<Nav />);
    });
});
    
chai.use(chaiEnzyme())