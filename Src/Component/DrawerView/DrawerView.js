import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Header } from 'native-base'
import WageView from '../WagesSetting'
import AddRecord from '../../Component/ShiftLogs/AddmanualyRecord'
import { ColorPicker } from 'react-native-color-picker'
import {SketchPicker} from 'react-color'

export default class DrawerView extends Component {
  state = {
    openSettingWage: false,
    openAddrecord: false,
  }
  render() {

    return (
      <View style={{ alignItems: "center", width: 300 }}>
        <Header style={{ height: 80, backgroundColor: "#fa8072", width: 300 }} ></Header>
        <AddRecord open={this.state.openAddrecord} close={() => this.setState({ openAddrecord: false })} />
        <WageView open={this.state.openSettingWage} close={() => this.setState({ openSettingWage: false })} />
        <View style={{ alignItems: "center", width: "100%", height: 100 }}>
          <TouchableOpacity style={{
            height: 40, margin: 20, marginLeft: 0,
            padding: 10, width: 250, backgroundColor: "#d3d3d3",
            borderRadius: 30
          }}
            onPress={

              () => {
            
                this.setState({

                  openAddrecord: true
                })
              }}>

            <Text style={{ fontSize: 20, textAlign: 'center' }}>افزودن شیفت </Text>

          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", width: "100%", height: 100 }}>
          <TouchableOpacity style={{ height: 40, margin: 20, borderRadius: 30, marginLeft: 0, padding: 10, width: 250, backgroundColor: "#d3d3d3" }} onPress={() => this.setState({ openSettingWage: true })}>

            <Text style={{ fontSize: 20, textAlign: 'center' }}>تنظیمات دستمزد </Text>

          </TouchableOpacity>
        </View>
        {/* <View style={{ alignItems: "center", width: "100%", borderBottomColor: "#fa8072", borderBottomWidth: 2, height: 100 }}>
          <TouchableOpacity style={{ height: 40, margin: 20, borderRadius: 30, marginLeft: 0, padding: 10, width: 250, backgroundColor: "#d3d3d3" }} onPress={() => this.setState({ opentheme: true })}>

            <Text style={{ fontSize: 20, textAlign: 'center' }}>انتخاب زمینه  </Text>

          </TouchableOpacity>
         <SketchPicker
        />
        </View>
        */}
   
       
          
          
          
      </View>

        )
    
    
      }
    
    }
