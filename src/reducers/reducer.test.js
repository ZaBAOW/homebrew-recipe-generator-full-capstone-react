import reducer from './index';
import {
    error
} from '../actions';

describe('Reducer', () => {
    it('Should return an error message upon error call', () => {
        const err = 'this is an error message';
        const state = reducer(undefined, error(err));
        expect(state.error).toEqual(err);
    });
});