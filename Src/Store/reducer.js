
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import FirstReducer from './reducers/reducerA';


const reducer= combineReducers({
    key1: persistReducer({
        key: 'FirstReducer',
        storage,
    //    whitelist: ['state1', 'state2'],
    }, FirstReducer)
});
export default reducer ;
 
