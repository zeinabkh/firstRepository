import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import WageView from '../WagesSetting'
import { createAppContainer,createStackNavigator } from 'react-navigation';
 export default class DrawerView  extends Component{
  render (){
    return(
      <View>
          <TouchableOpacity onPress={this.props.navigation.navigate('wages')}>
    <View style={{backgroundColor: 'red'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>setting Wages</Text>
      </View>
    </TouchableOpacity>
      </View>
  
    )
  }
   
 }

 
//export default SettingsView ;
