import React, { Componet } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import moment from 'moment-jalaali'
import RecordDetails from './recordDetail'
const ListItems = (props) => {
   // alert(props.itemselectCreatAt)
    
    return(
      
        <View style={{flexDirection:"column"}}>


<TouchableOpacity style={{flexDirection:"column"}} onPress={()=> props.onItemSelected(props.itemselectCreatAt)}>
        <View style={styles.globalView}>

        <Text style={styles.textStyle}>{props.wage}</Text>
          <Text style={[styles.textStyle,{width:"20%"}]}>{props.workSpan}</Text>
          <Text style={styles.textStyle}>{new Date(props.endWork).getHours().toString().concat(":",new Date(props.endWork).getMinutes().toString())}</Text>
          <Text style={styles.textStyle} >{new Date(props.startWork).getHours().toString().concat(":",new  Date(props.startWork).getMinutes().toString())}</Text>
         <Text style={styles.textStyle} >{moment(props.createAt).format('jMM/jDD')}</Text>
            </View> 
      </TouchableOpacity>
   
        </View>

   

)}
    ;
const styles = StyleSheet.create({
    globalView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 5,
        marginLeft: 5,
        borderBottomColor: "#f5deb3",
      borderTopColor:"white",
        borderRightColor:"white",
        borderLeftColor:"white",
        borderWidth: 2,
        height: 40,
        width: "100%"

    },
    textStyle: {
        width: "17%",
    /*    margin: 5,
        padding:5,*/
      

    }

})


export default ListItems;