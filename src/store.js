//import {createStore, applyMiddleware, combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
//import thunk from 'redux-thunk';
//import {loadAuthToken} from './local-storage';
//import Reducer from './reducers';
////import protectedDataReducer from './reducers/protected-data';
//import {setAuthToken, refreshAuthToken} from './actions';
//
//// protectedData: protectedDataReducer
//
//const store = createStore(
//    combineReducers({
//        form: formReducer,
//        auth: Reducer
//       
//    }),
//    applyMiddleware(thunk)
//);
//
//// Hydrate the authToken from localStorage if it exist
//const authToken = loadAuthToken();
//if (authToken) {
//    const token = authToken;
//    store.dispatch(setAuthToken(token));
//    store.dispatch(refreshAuthToken());
//}
//
//export default store;


import {createStore, applyMiddleware} from 'redux';
// import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions';


import Reducer from './reducers';

const store = createStore(Reducer, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;