import {createAppContainer,createBottomTabNavigator, createDrawerNavigator,  createStackNavigator,createSwitchNavigator}from 'react-navigation'
import React,{Component} from 'react'
import ShiftLogScreen from './Src/Component/ShiftLogs/ShiftLogScreen'
import App from './App'
import {DrawerLayoutAndroid} from 'react-native'
import DrawerView from './Src/Component/DrawerView/DrawerView'

export default  class Router extends Component {
    render(){
        return(
            <DrawerLayoutAndroid
            renderNavigationView={()=>{
                return(
                    <  DrawerView/>
                )
              
            }}>
                 <RoutContainar/>
            </DrawerLayoutAndroid>
        
        )
    }
}




const TabNavigator =createBottomTabNavigator(
    
{start:createStackNavigator({Start:App})
,
logs:createStackNavigator({ Records:ShiftLogScreen})
})

const RoutContainar=createAppContainer(TabNavigator)

