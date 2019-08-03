import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from '../reducers';

export const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
 
reducers/index.js

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import FirstReducer from './FirstReducer';
import SecondReducer from './SecondReducer';

export default combineReducers({
    key1: persistReducer({
        key: 'FirstReducer',
        storage,
        whitelist: ['state1', 'state2'],
    }, FirstReducer),
    key2: persistReducer({
        key: 'SecondReducer',
        storage,
        whitelist: ['state3']
    }, SecondReducer)
});
 
index.js

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Router from './Router';
import { store, persistor } from './store';

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


import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  persistStore,
  persistCombineReducers,
} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './reducers/todos';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  todos,
});

export const configureStore = () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      composeWithDevTools()
    )
  );
  const persistor = persistStore(store);

  return { persistor, store };
};


<Button title={this.timerState ? "stop" : "start"} onPress={this.startTimer} />


<TouchableWithoutFeedback   style={styles.buttonStyle} onPressIn={() => {this.PressIn=new Date()}} onPressOut={()=>this.startTimer}>
                        
<Text>start</Text>

</TouchableWithoutFeedback>;



let infoTemp=state.info.map((item)=>{
          
  if((item.month+1)!==action.key){
     item. month= action.month,
     item. year= action.year,
     item. shiftSpan= action.shiftSpan,
     item. dateRecord=action.dateRecord,
     item. startWork= action.startWork,
     item. endWork=action.endWork,
     item. shiftSpanString= action.shiftSpanString,
     item. wage= action.wage,
     item.visible=false
   
  }else{
      item. month= action.month,
      item. year= action.year,
      item. shiftSpan= action.shiftSpan,
      item. dateRecord=action.dateRecord,
      item. startWork= action.startWork,
      item. endWork=action.endWork,
      item. shiftSpanString= action.shiftSpanString,
      item. wage= action.wage,
      item.visible=action.visible
  }

})
      return {...state,
      info:infoTemp}
         for(i in state.info){
           
              if((state.info[i].month+1)===action.key){
             
                  state.info[i]. visible=false
                //  alert(   state.info[i].visible)
              }
        
          }
       //   alert(   state.info[1].visible)
        return state ;
 /* if(action.key===0)
  return state ;
    return {
        ...state,
        filterInfo:state.info.filter((item)=>{
            return item.month+1===action.key
        })/*state.info.find(item=>{
      if (item.month!==action.key){
          item.visible=false
          
      }
  })
  }*/













  import React from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
