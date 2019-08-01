import React from 'react';
import { shallow } from 'enzyme';

import Creator from './brew-creator';
import ViewBrew from './brew-viewer';
import Brews from './brews';
import Yourbrews from './brew-archive';
import BrowserPage from './browser-page';
import Browser from './browser';
import Dashboard from './dashboard';
import Footer from './footer';
import Landing from './landing=page';
import Login from './login';
import Nav from './Nav';
import Signup from './signup';
import Archive from './your-brew';

describe('<Creator />', () => {
    it('Renders without crashing', () => {
        shallow(<Creator />);
    });
});
    
describe('<ViewBrew />', () => {
    it('Renders without crashing', () => {
        shallow(<ViewBrew />);
    });
});
    
describe('<Brews />', () => {
    it('Renders without crashing', () => {
        shallow(<Brews />);
    });
});
    
describe('<Yourbrews />', () => {
    it('Renders without crashing', () => {
        shallow(<Yourbrews />);
    });
});
    
describe('<Browser />', () => {
    it('Renders without crashing', () => {
        shallow(<Browser />);
    });
});
    
describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    });
});
    
describe('Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });
});
    
describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
    });
});
    
describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    });
});
    
describe('<Nav />', () => {
    it('Renders without crashing', () => {
        shallow(<Nav />);
    });
});
    
describe('<Signup />', () => {
    it('Renders without crashing', () => {
        shallow(<Signup />);
    });
});
    
describe('<Archive />', () => {
    it('Renders without crashing', () => {
        shallow(<Archive />);
    });
});