import React, { Componet } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItems = (props) => (
    <TouchableOpacity style={styles.globalView}>
          <Text style={styles.textStyle}>{props.wage}</Text>
          <Text style={[styles.textStyle,{width:"20%"}]}>{props.workSpan}</Text>
          <Text style={styles.textStyle}>{props.endWork}</Text>
          <Text style={styles.textStyle} >{props.startWork}</Text>
         <Text style={styles.textStyle} >{props.date}</Text>
      
           
            
          
       
    </TouchableOpacity>

)
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