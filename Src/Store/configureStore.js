
/*import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers/reducerA';
const configureStore=()=>{
  return  createStore(reducers);
};

export default configureStore ;*/


/*import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducer';

export const store = createStore(
    reducer,
    {},
    compose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);*/


import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducer from './reducers/reducerA';
import storage from 'redux-persist/es/storage';
const info=reducer.info 
const filterList=reducer.filterInfo
const config = {
  key: 'root',
  storage:storage,
  whitelist:['info','filterList']
};

const reducers = persistReducer(config,reducer)


  export const store = createStore(
    persistReducer(config,reducer))/*,
    {},
    compose(
      applyMiddleware(thunk),
      composeWithDevTools()
    )
  );*/
 export  const persistor = persistStore(store);

 

