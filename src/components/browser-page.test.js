import React from 'react';
import { shallow } from 'enzyme';

import BrowserPage from './browser-page';

describe('<BrowserPage />', () => {
    it('Renders without crashing', () => {
        shallow(<BrowserPage />);
    });
});
    