import DrawerView from './DrawerView/DrawerView'
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import WageView from './WagesSetting'
import { createAppContainer,createStackNavigator } from 'react-navigation';
 export default class SettingsView  extends Component{
    render (){
     return(<SettingContainar/>)
      
    }
     
   }
  
    
  
    const settingsViews=createStackNavigator({
      DrawerView:DrawerView,
      wages:WageView
  });
  const SettingContainar=createAppContainer(settingsViews)