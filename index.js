/**
 * @format
 */
import React from 'react'
import { AppRegistry,View ,ActivityIndicator} from 'react-native';
import { name as appName } from './app.json';
import configureStore from './Src/Store/configureStore';
import ShiftLogScreen from './Src/Component/ShiftLogs/ShiftLogScreen'
import { Provider } from 'react-redux';
import Router from "./Router";
import { PersistGate } from 'redux-persist/lib/integration/react';
//import { persistor, store } from './Src/Store/configureStore';
 const RenderLoading = () => {
    return (
        <View>                
            <ActivityIndicator size={"large"} />
        </View>        
    );    
};

const store=configureStore();
const nodePOint = () => (
    <Provider store={store}>
        
            <Router />
       

    </Provider>
)

AppRegistry.registerComponent(appName, () => nodePOint);
