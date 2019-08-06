import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const Footer = (props) => (
  <View style={styles.footerStyle}>
    <View style={styles.itemStyle}>
      <Text>{"Reports:".concat(props.count)}</Text>
    </View>
    <View style={styles.itemStyle}>
      <Text>{"TotalWage:".concat(props.totalWage)}</Text>
    </View>
    <View style={styles.itemStyle}>
      <Text>{"Hours".concat(props.Hours)}</Text>
    </View>
  </View>

);

const styles = StyleSheet.create({
  footerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    backgroundColor: '#fa8072',
    width: "100%",
    height: 50
  },
  itemStyle: {
    width: "30%",
    alignItems:"center",
    margin:5
  }
})

export default Footer;