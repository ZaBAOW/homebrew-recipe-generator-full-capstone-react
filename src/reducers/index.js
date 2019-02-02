import * as actions from "../actions";

const initialState = {
    authToken: "",
    loading: false,
    archive: [],
    userId: "",
    user: null,
    brewId: "",
    brewName: "",
    maltName: "",
    maltMeasure: null,
    yeastName: "",
    yeastSchedule: "",
    hopsName: "",
    hopsMeasure: null,
    mashSchedule: "",
    error: null,
    currentBrew: "",
    keyword: "",
    results: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: action.err
        });
    }
    
    if (action.type === actions.SIGN_UP) {
        return Object.assign({}, state, {
            error: null,
            user: action.users
        })
    }
    
    if (action.type === actions.LOG_OUT) {
        return Object.assign(
            {},
            {
                authToken: "",
                userId: "",
                user: null,
                archive: []
            }
        );
    }
    
    if (action.type === actions.BROWSE) {
        RETURN Object.assign({}, state, {
            loading: false,
            results: action.brews
        });
    }
    
    if (action.type === actions.APPEND_RESULTS) {
        const brews = actions.brews.items;
        return Object.assign({}, state, {
            error: null,
            loading: false,
            brews: brews
        });
    }
    
    if (actions.type === actions.CLEAR_RESULTS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            brews: []
        });
    }
    
    if (actions.type === actions.SELECT_BREW) {
        return Object.assign({}, state, {
            brew: actions.brew,
            brewId: actions.brewId,
            loading: false
        });
    }
    
    if (actions.type === actions.SUBMIT_BREW) {
        return Object.assign({} , state, {
            loading: false
        });
    }
    
    if (actions.type === actions.DELETE_BREW) {
        return Object.assign({}, state, {
            loading: false
        });
    }
    
    if (actions.type === actions.AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    
    if (action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    }
    
    if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    }
    return state;
};