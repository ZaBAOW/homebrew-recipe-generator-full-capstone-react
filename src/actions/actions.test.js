import {
    LOG_IN_LIST,
    logIn,
    SIGN_UP,
    signUp,
    LOG_OUT,
    logOut,
    LOG_USER,
    logUser,
    SUBMIT_BREW,
    submitBrew,
    DELETE_BREW,
    deleteBrew,
    EDIT_BREW,
    editBrew,
    BROWSE,
    browse,
    APPEND_RESULTS,
    appendResults,
    APPEND_ARCHIVE,
    appendArchive,
    SELECT_BREW,
    selectBrew,
    VIEW_BREW,
    viewBrew,
    CLEAR_RECIPE,
    clearRecipe,
    ERROR,
    error,
    SET_AUTH_TOKEN,
    setAuthToken,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    FETCH_PROTECTED_DATA_ERROR,
    fetchProtectedDataError,
    FETCH_PROTECTED_DATA_SUCCESS,
    fetchProtectedDataSuccess
} from '../actions';

describe('logIn', () => {
    it('Should return list of logged in users', () => {
        const user1 = {
            username: 'zebra',
            password: 'willyb4321'
        };
        
        const user2 = {
            username: 'zebra',
            password: 'willyb4321'
        };
        
        const loggedUsers = [user1, user2];
        const action = logIn(loggedUsers);
        expect(action.type).toEqual(LOG_IN_LIST);
//        expect(action.loggedUsers).toEqual(loggedUsers);
    })
})

describe('signUp', () => {
    it('Should return a signed up user', () => {
        const user = {
            username: 'zebra',
            password: 'willyb4321'
        };
        const action = signUp(user);
        expect(action.type).toEqual(SIGN_UP);
        expect(action.user).toEqual(user);
    });
});

describe('logOut', () => {
    it('Should return logout', () => {
        const action = logOut();
        expect(action.type).toEqual(LOG_OUT);
    });
});

describe('logUser', () => {
    it('Should return a logged in user', () => {
        const user = {
            username: 'zebra',
            password: 'willyb4321'
        };
        const action = logUser(user);
        expect(action.type).toEqual(LOG_USER);
        expect(action.user).toEqual(user);
    });  
});

describe('submitBrew', () => {
    it('Should return a submitted brew', () => {
        const brew = {
            brewName: 'brew',
            abv: '3%',
            hopsName: 'hop',
            hopsMeasure: 3,
            maltName: 'malt',
            maltMeasure: 3,
            yeastName: 'yeast',
            yeastMeasure: 3,
            yeastSchedule: 'schedule',
            mashSchedule: 'schedule'
        };
        const action = submitBrew(brew);
        expect(action.type).toEqual(SUBMIT_BREW);;
    });
});

describe('deleteBrew', () => {
    it('Should return a delete request', () => {
        const action = deleteBrew();
        expect(action.type).toEqual(DELETE_BREW);
    });
});

describe('editBrew', () => {
    it('Should return editted brew', () => {
        const action = editBrew()
        expect(action.type).toEqual(EDIT_BREW);
    });
});

describe('browse', () => {
    it('Should return browse request', () => {
        const action = browse();
        expect(action.type).toEqual(BROWSE);
    });
});

describe('appendResults', () => {
    it('Should return results to append', () => {
        const payload = {
            brewName: 'brew',
            abv: '3%'
        };
        const action = appendResults(payload);
        expect(action.type).toEqual(APPEND_RESULTS);
//        expect(action.payload).toEqual(payload);
    })
})

describe('appendArchive', () => {
    it('Should return archive to append', () => {
        const payload = {
            brewName: 'brew',
            abv: '3%'
        };
        const action = appendArchive(payload);
        expect(action.type).toEqual(APPEND_ARCHIVE);
//        expect(action.payload).toEqual(payload);
    })
})

describe('selecBrew', () => {
    it('Should return selected brew', () => {
        const brewId = 12345678990;
        const brew = {
            brewName: 'brew',
            abv: '3%',
            brewId: brewId
        }
        const action = selectBrew(brewId, brew);
        expect(action.type).toEqual(SELECT_BREW);
        expect(action.brewId).toEqual(brew);
    });
});

describe('viewBrew', () => {
    it('Should return brew to view', () => {
        const brew = {
            brewName: 'brew',
            abv: '3%',
            hopsName: 'hop',
            hopsMeasure: 3,
            maltName: 'malt',
            maltMeasure: 3,
            yeastName: 'yeast',
            yeastMeasure: 3,
            yeastSchedule: 'schedule',
            mashSchedule: 'schedule'
        };
        const action = viewBrew(brew);
        expect(action.type).toEqual(VIEW_BREW);
    });
});

describe('clearRecipe', () => {
    it('Should return recipe clear request', () => {
        const action = clearRecipe();
        expect(action.type).toEqual(CLEAR_RECIPE);
    });
});

describe('error', () => {
    it('Should return error message', () => {
        const err = 'this is an error message';
        const action = error(err);
        expect(action.type).toEqual(ERROR);
        expect(action.err).toEqual(err);
    });
});

describe('setAuthToken', () => {
    it('Should return set auth token', () => {
        const authToken = 1234567890;
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('authRequest', () => {
    it('Should return authentication request',  () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', () => {
    it('Should return authentication success', () => {
        const currentUser = {
            username: 'zebra',
            password: 'willyb4321',
            userId: 123345678
        };
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
//        expect(action.currentuser).toEqual(currentUser);
//        expect(action.currentuser.userId);
    });
});

describe('fetchProtectedDataError', () => {
    it('Should return data error', () => {
        const action = fetchProtectedDataError();
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
    });
});

describe('fetchProtectedDataSuccess', () => {
    it('Should return protected data', () => {
        const action = fetchProtectedDataSuccess();
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
    });
});