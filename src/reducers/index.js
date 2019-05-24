import * as actions from "../actions";
//import {FETCH_PROTECTED_DATA_SUCCESS} from "../actions";

const initialState = {
    authToken: "",
    archive: [],
    userId: "",
    user: null,
    loggedUsers: [],
    brewId: "",
    brewName: "",
    maltName: "",
    maltMeasure: null,
    yeastName: "",
    yeastSchedule: "",
    hopsName: "",
    hopsMeasure: null,
    mashSchedule: "",
    currentBrew: "",
    keyword: "",
    brews: [],
    results: [],
    items:[],
    abv: ""
}

export default function reducer(state = initialState, action) {
    if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: action.err
        });
    }
    
    if (action.type === actions.SIGN_UP) {
        const newUser = actions.signUp;
        console.log(newUser);
        return Object.assign({}, state, {
            error: null,
            user: action.users
        })
    }
    
    if (action.type === actions.LOG_USER) {
        console.log(action.user);
        return Object.assign({}, state, {
            error: null,
            loading: false,
            user: action.user
        });
    }
    
    if (action.type === actions.LOG_IN_LIST) {
        return Object.assign({}, state,  {
            error: null,
            loading: false,
            loggedUsers: action.user
        });
    }
    
    if (action.type === actions.LOG_OUT) {
        return Object.assign(
            {},
            {
                authToken: "",
                userId: "",
                user: null,
                archive: [],
                loggedUsers: []
            }
        );
    }
    
    if (action.type === actions.BROWSE) {
        return Object.assign({}, state, {
            loading: false,
            results: action.brews
        });
    }
    
    if (action.type === actions.VIEW_BREW) {
        return Object.assign({}, state, {
            brewName: action.brew.brew[0].brewName,
            abv: action.brew.brew[0].abv,
            hopsName: action.brew.hop.hopsName,
            hopsMeasure: action.brew.hop.hopsMeasurement,
            maltName: action.brew.malts.maltName,
            maltMeasure: action.brew.malts.maltMeasurement,
            mashSchedule: action.brew.mashes.mashSchedule,
            yeastName: action.brew.yeasts.yeastName,
            yeastMeasure: action.brew.yeasts.yeastMeasurement,
            yeastSchedule: action.brew.yeasts.yeastSchedule
        })
    }
    
        if (action.type === actions.CLEAR_RECIPE) {
        console.log('inserting data into props');
        console.log(action.brew.brew[0].brewName);
        return Object.assign({}, state, {
            brewName: "",
            abv: "",
            hopsName: "",
            hopsMeasure: "",
            maltName: "",
            maltMeasure: "",
            mashSchedule: "",
            yeastName: "",
            yeastMeasure: "",
            yeastSchedule: ""
        })
    }
    
    if (action.type === actions.APPEND_RESULTS) {
        return Object.assign({}, state, {
            brews: action.payload,
            brewName: action.payload.results[0].brewName
        })
    }
    
    if (action.type === actions.APPEND_ARCHIVE) {
        return Object.assign({}, state, {
            brews: [action.payload]
        })
    }
    
    if (action.type === actions.CLEAR_RESULTS) {
        return Object.assign({}, state, {
            loading: false,
            brews: []
        });
    }
    
    if (action.type === actions.SELECT_BREW) {
        return Object.assign({}, state, {
            brew: action.brew,
            brewId: action.brewId,
            loading: false
        });
    }
    
    if (action.type === actions.SUBMIT_BREW) {
        return Object.assign({} , state, {
            loading: false
        });
    }
    
    if (action.type === actions.DELETE_BREW) {
        return Object.assign({}, state, {
            loading: false
        });
    }
    
    if (action.type === actions.AUTH_REQUEST) {
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
            currentUser: action.currentUser,
            userId: action.currentUser.id
        });
    }
  
    if (action.type === actions.FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === actions.FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
};