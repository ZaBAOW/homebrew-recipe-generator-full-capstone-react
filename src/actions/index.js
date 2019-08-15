import jwtDecode from "jwt-decode";
import { API_ORIGIN } from "../config";
import {saveAuthToken, clearAuthToken, saveId} from '../local-storage';

export const REQUEST = 'REQUEST';
export const LOG_IN_LIST = "LOG_IN_LIST";
export const LOG_USER = "LOG_USER";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";
export const SUBMIT_BREW = "SUBMIT_BREW";
export const DELETE_BREW = "DELETE_BREW";
export const EDIT_BREW = "EDIT_BREW";
export const BROWSE = "BROWSE";
export const APPEND_RESULTS = "APPEND_RESULTS";
export const APPEND_ARCHIVE = "APPEND_ARCHIVE";
export const CLEAR_RESULTS = "CLEAR_RESULTS";
export const SELECT_BREW = "SELECT_BREW";
export const VIEW_BREW = "VIEW_BREW";
export const CLEAR_RECIPE = "CLEAR_RECIPE";
export const ERROR = "ERROR";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = 'AUTH_ERROR';
export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const ADDED_TO_DATABASE = 'ADDED_TO_DATABASE';
export const DELETE_FROM_DATABASE = 'DELETED_FROM_DATABASE';

export const request = () => ({
    type: REQUEST
});

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
    type: LOG_IN_LIST,
    user
});

export const logUser = user => ({
    type: LOG_USER,
    user
});

export const logOut = () => ({
    type: LOG_OUT
});

export const signUp = user => ({
    type: SIGN_UP,
    user
});

export const fetchProtectedDataError = err => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
})

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

export const addedToDatabase = brew => ({
    type: ADDED_TO_DATABASE,
    brew
});

export const deleteFromDatabase = brewId => ({
    type: DELETE_FROM_DATABASE,
    brewId
});

export const browse = brews => ({
    type: BROWSE,
    brews
});

export const appendResults = results => ({
        type: APPEND_RESULTS,
        payload: {results}
});

export const appendArchive = results => ({
        type: APPEND_ARCHIVE,
        payload: {results}
});

export const clearResults = brews => ({
    type: CLEAR_RESULTS,
    brews
});

export const selectBrew = (brew, brewId) => ({
    type: SELECT_BREW,
    brew,
    brewId
});

export const viewBrew = brew => ({
    type: VIEW_BREW,
    brew
});

export const clearRecipe = () => ({
    type: CLEAR_RECIPE
})


//error action
export const error = err => ({
    type: ERROR,
    err
});

const storeAuthInfo = (authToken, dispatch) => {
    console.log(authToken);
    console.log("start");
    console.log("authToken: ", jwtDecode(authToken));
    console.log("end");
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken));
    saveAuthToken(authToken);
    console.log('authToken succesfully stored');
    dispatch(logSession({ user: decodedToken.user }));
};

export const logSession = user => dispatch => {
  console.log('user being logged in: ', user);
  fetch(`${API_ORIGIN}/auth/userLoggedIn`, {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      console.log(res.loggedIn[0]._id);
      const id = res.loggedIn[0]._id;
      dispatch(logUser(res.loggedIn[0]));
      saveId(id);
    });
};

// User signup
export const signupUser = user => dispatch => {
    dispatch(signUp(user));
    fetch(`${API_ORIGIN}/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        console.log('first check')
        return res.json();
    })
    .then(authToken => {
        console.log(authToken);
        return storeAuthInfo(authToken.token, dispatch);
    })
    .catch(err => {
//        dispatch(fetchErr(err));
        console.log(err);
    })
};

// User Login
export const loginUser = user => dispatch => {
    dispatch(request());
    console.log("api url", API_ORIGIN);
    console.log('loggin you in...');
    fetch(`${API_ORIGIN}/auth/login`, {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(!res.ok) {
            return Promise.rejects(res.statusText);
        }
        return res.json();
    })
    .then(authToken => {
        console.log('authToken: ', authToken.authToken);
        storeAuthInfo(authToken.authToken, dispatch)})
    .catch(err => {
        console.log(err);
    });
};

// User Logout
export const logoutUser = user => dispatch => {
    console.log('logging you out...');
    console.log(user);
    fetch(`${API_ORIGIN}/auth/userLoggedIn`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ user: user })
    })
    .then(res => {
        console.log('youve been logged out');
        clearAuthToken();
        dispatch(logOut());
    })
    .catch(err => {
        console.log(err);
    });
};

// error handler
export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if(
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
            conde: res.status,
            message: res.statusText
        });
    }
    return res;
};

// protected data endpoints
export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_ORIGIN}/protected`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
        dispatch(fetchProtectedDataError(err));
    });
};

//refreshing auth token
export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().authToken;
    return fetch(`${API_ORIGIN}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};

// browse hombrews
export const browseBrews = keyword => dispatch => {
    return fetch(`${API_ORIGIN}/brews/get-one/${keyword}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            "content-type": "application/json"
        }
    })
    .then(res => {
        console.log(res);
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(res => {
        const brews = res;
        dispatch(appendResults(brews));
        return brews;
    })
    .catch(err => {
        console.log(err);
    });
};

export const getYourBrews = userId => dispatch => {
    console.log('fetching brews form database...');
    console.log(userId);
    return fetch(`${API_ORIGIN}/brews/getArchive/${userId}`, {
        method: 'GET',
        headers: {
            "content-type": 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(res => {
        const brews = res.data;
        console.log(res.status);
        console.log(brews);
        if(res.status === 400) {
            return;
        }else if (res.status === 200) {
            console.log('your archive:', brews);
            dispatch(appendArchive(brews));
            return brews;
        }
    })
}

export const viewRecipe = brewId => dispatch => {
    console.log(brewId);
    return fetch(`${API_ORIGIN}/brews/viewBrew/${brewId}`, {
        method: 'GET',
        headers: {
            "content-type": 'application/json'
        }
    })
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(res => {
        const brew = res.data;
        console.log('data to be sent to reducer: ', res.data)
        dispatch(viewBrew(brew));
        return brew;
    })
}

// Append search results to result area
//export const Append = brews => dispatch => {
//    const type = APPEND_RESULTS;
//    console.log('displaying results...');
//    console.log('length of brews ',brews.length);
//    for(var i = 0; i < brews.length; i++) {
//        const resultObj = {
//            brewName: brews[i].brewName,
//            id: brews[i].id,
//            abv: brews[i].abv,
//            userId: brews[i].userId
//        }
//    }
//}

// submitting a homebrew
export const submitRecipe = (brew, userID, token) => dispatch => {
    console.log(brew);
    console.log(userID);
    console.log(token);
    const brewObj = {
        brewName: brew.brewName,
        abv: brew.abv,
        maltName: brew.maltName,
        maltMeasure: brew.maltMeasure,
        yeastName: brew.yeastName,
        yeastMeasure: brew.yeastMeasure,
        yeastSchedule: brew.yeastSchedule,
        hopsName: brew.hopsName,
        hopsMeasure: brew.hopsMeasure,
        mashSchedule: brew.mashSchedule
    };
    const checkArray = Object.values(brewObj);
    console.log(checkArray);
    console.log(checkArray[0]);
    for(var i = 0; i <= checkArray.length; i++) {
        console.log(checkArray[i]);
        if(checkArray[i] === "") {
            console.log([i]);
            return alert('A field was left blank!');
        }
    }
    const userBrew = { brew: brewObj, id: userID};
    console.log('userbrew: ', userBrew);
    dispatch(request());
    fetch(`${API_ORIGIN}/brews`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(userBrew)
    })
    .then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(res => {
        console.log(res);
        alert('Congrats, you just posted a recipe to the database!!!')
        dispatch(addedToDatabase(res));
    })
    .catch(err => {
        console.log(err);
    })
};

// deleting a homebrew
export const deleteRecipe = (id, token) => dispatch => {
    dispatch(request);
    fetch(`${API_ORIGIN}/brews/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        dispatch(deleteFromDatabase(id));
    })
    .catch(err => {
        console.log(err);
    });
};

export const logger = store => next => actions => {
        console.group(actions.type);
        console.info('dispatching', actions);
        let result = next(actions);
        console.log('next state', store.getState());
        console.groupEnd();
        return result;
    }