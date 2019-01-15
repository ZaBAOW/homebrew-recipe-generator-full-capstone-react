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