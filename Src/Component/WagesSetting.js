import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'

import {createAppContainer,createStackNavigator} from 'react-navigation'
 export default class WageSetting extends Component {
constructor(props){
    super(props)
}
    state={

        HourlyWage:0,
        //...
    }

    render() {
return(
        <ScrollView>
            <View>
                <Text></Text>
                <TextInput />
            </View>
            <View>
                <Text></Text>
                <TextInput />
            </View>
            <View>
                <Text></Text>
                <TextInput />
            </View>
        </ScrollView>
)
    }
}

 