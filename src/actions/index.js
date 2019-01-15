import jwtDecode from "jwt-decode";
import { API_ORIGIN } from "../config";
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";
export const SUBMIT_BREW = "SUBMIT_BREW";
export const DELETE_BREW = "DELETE_BREW";
export const EDIT_BREW = "EDIT_BREW";
export const BROWSE = "BROWSE";
export const VIEW_BREW = "VIEW_BREW";
export const ERROR = "ERROR";
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

//authentication actions
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const logIn = user => ({
    type: LOG_IN,
    user
});

export const logOut = () => ({
    type: LOG_OUT
});

export const signUp = user => ({
    type: SIGN_UP,
    user
});


//hombrew actions
export const submitBrew = brew => ({
    type: SUBMIT_BREW,
    brew
});

export const deleteBrew = brewId => ({
    type: DELETE_BREW,
    brewId
});

export const editBrew = brewId => ({
    type: EDIT_BREW,
    brewId
});

export const browse = keyword => ({
    type: BROWSE,
    keyword
});

export const viewBrew = brewId => ({
    type: VIEW_BREW,
    brewId
});


//error action
export const error = err => ({
    type: ERROR,
    err
});

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken));
    dispatch(logSession({ user: decodedToken.username }));
};

// User signup
export const signupUser = user => dispatch => {
    dispatch(request());
    fetch(`${API_ORIGIN}/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JOSN.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(authToken => storeAuthInfo(authToken.token, dispatch))
    .catch(err => {
        dispatch(fetchErr(err));
    })
};

// User Login
export const loginUser = (username, password) => dispatch => {
    dispatch(request());
    fetch(`${API_ORIGIN}/auth/login`, {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(username, password)
    })
    .then(res => {
        if(!res.ok) {
            return Promise.rejects(res.statusText);
        }
        return res.json();
    })
    .then(authToken => storeAuthInfo(authToken.token, dispatch))
    .catch(err => {
        dispatch(frameErr(err));
    });
};

// User Logout
export const logoutUser = user => dispatch => {
    fetch(`${API_ORIGIN}/auth/`)
}
