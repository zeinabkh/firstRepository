import {createAppContainer,createBottomTabNavigator,createStackNavigator,createSwitchNavigator}from 'react-navigation'
import React,{Component} from 'react'
import ShiftLogScreen from './Src/Component/ShiftLogs/ShiftLogScreen'
import App from './App'
import {Text,View,FlatList} from'react-native'

/*export default  class Router extends Component {
    render(){
        return  <RoutContainar/>;
    }
}*/

const data = new Array(150).fill(0);

class Router extends React.Component {
  renderItem = ({ index }) => {
    return (
      <View style={{ height: 50 }}>
        <Text style={{ textAlign: 'center' }}>Item {index}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({start:createStackNavigator({Start:App})
   ,
   logs:createStackNavigator({ Records:ShiftLogScreen})
});

export default createAppContainer(TabNavigator)

