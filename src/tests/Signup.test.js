import React from 'react';
import  { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';


import {Signup} from '../components/signup';

describe('<Signup />', () => {
    it('renders <Signup /> components' , () => {
        shallow(<Signup />);
    });
    
//    it('signs up user for site account', () => {
//        let res;
//        const username = 'zabel';
//        const password = 'password';
//        const newUser = {
//            username: username,
//            password: password
//        };
//        
//        return User.hashPassword(newUser.password)
//        .then( function(expectedPassword){
//            return chai.request(app).post('/users').send(newUser);
//        })
//        .then(function(res) {
//            expect(action.type).toEqual(SIGN_UP);
//            expect(res).to.have.status(201);
//            expect(res).to.be.a('object');
//            expect(res.body).to.include.keys('username', 'password');
//            expect(action.username).to.equal(newUser.username);
//        })
//    })
});

chai.use(chaiEnzyme());