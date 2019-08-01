import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Reducer from './reducers/reducerA';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
/*const persistConfig = {
    key: 'root',
    storage: storage,
   // stateReconciler: autoMergeLevel2 ,// see "Merge Process" section for details.
    whitelist:['Router']
   };
const RootRouter=combineReducers({
  Reducer:Reducer
})
const pReducer = persistReducer(persistConfig, Reducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);*/


const configureStore=()=>{
  return  createStore(Reducer);
}

export default configureStore ;




