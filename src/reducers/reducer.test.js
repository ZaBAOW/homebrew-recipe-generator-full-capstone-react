import reducer from './index';
import {
    error,
    signUp,
    logUser,
    logIn,
    logOut,
    appendResults,
    appendArchive
} from '../actions';

describe('Reducer', () => {
    it('Should return an error message upon error call', () => {
        const err = 'this is an error message';
        const state = reducer(undefined, error(err));
        expect(state.error).toEqual(err);
    });
    
    it('Should set user to newly signed up user', () => {
        let user = {
            username: 'zebra',
            password: 'willyb1234'
        };
        const myState = reducer(undefined, signUp(user));
        expect(myState.user).toEqual(user);
    });
    
    it('Should return user that has logged in', () => {
        let user = {
            username: 'zebra',
            password: 'willyb4321'
        };
        const myState = reducer(undefined, logUser(user));
        expect(myState.user).toEqual(user);
    });
    
    it('Should reset current logged user state', () => {
        let state = {
            authToken: "165161632131861",
            userId: "989156864",
            user: {username: 'zebra', password: 'willyb4321'},
            archive: [],
            loggedUsers: [{username: 'zebra', password: 'willyb4321'}]
        };
        const myState = reducer(state, logOut())
        expect(myState.authToken).toEqual("");
        expect(myState.userId).toEqual("");
        expect(myState.user).toEqual(null);
        expect(myState.archive).toEqual([]);
        expect(myState.loggedUsers).toEqual([]);
    });
    
    it('Should return brews to be shown in results', () => {
        let results = [{"password": "willyb4321", "username": "zebra1"}, {"password": "willyb4321", "username": "zebra2"}];
        
        const myState = reducer(undefined, appendResults(results));
        expect(myState.browserBrews.results).toEqual(results);
    });
    
    it('Should return user archive', () => {
        let userBrews = [{"password": "willyb4321", "username": "zebra1", userId: 12345678}, {"password": "willyb4321", "username": "zebra2", userId: 12345678}];
        
        const myState = reducer(undefined, appendArchive(userBrews));
        expect(myState.archiveBrews[0].results).toEqual(userBrews);
    });
});