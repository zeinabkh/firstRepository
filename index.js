/**
 * @format
 */
/*import React from 'react'
import { AppRegistry, View, ActivityIndicator } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Router from "./Router";
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './Src/Store/configureStore'
//import { persistor, store } from './Src/Store/configureStore';


const store=configureStore();
const nodePOint = () => (
    <Provider store={store}>
        
            <Router />
       

    </Provider>
)

AppRegistry.registerComponent(appName, () => nodePOint);*/

import React, { Component } from 'react';
import { name as appName } from './app.json';
import { View ,AppRegistry,DrawerLayoutAndroid} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Router from './Router';
import { store, persistor } from './Src/Store/configureStore';

class App extends Component {
    render() {
        return (
            <PersistGate
                persistor={persistor}
                loading={<View />}
            >
                <Provider store={store} >
                  
                    <Router />
                   
                  
                </Provider>
            </PersistGate>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);