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
import { persistStore, persistReducer } from  'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import rootReducer from './reducers';

// import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1 ,
    whiteList: ['authToken', 'userId']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor };
} ;