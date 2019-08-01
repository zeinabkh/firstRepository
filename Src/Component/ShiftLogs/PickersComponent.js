import React,{Component} from 'react'
import { FlatList, View, Text, StyleSheet, Picker } from 'react-native'
import ListItems from './ListItems'
import { connect } from 'react-redux'
import moment from 'moment-jalaali'

const Mount=[
{name:"فروردین",num:1},{name:"اردیبهشت",num:2},{name:"خرداد",num:3},
{name:"تیر",num:4},{name:"مرداد",num:5},{name:"شهریور",num:6},
{name:"مهر",num:7},{name:"آبان",num:8},{name:"آذر",num:9},
{name:"دی",num:10},{name:"بهمن",num:11},{name:"اسفند",num:12}];

const PickersItem=(currentMount)=>{
    Mount.map(mount=>{
    return <Picker.Item label="lvnhn"//{mount.name} 
    value="5"//{mount.num}
/>})
}

export default PickersItem;