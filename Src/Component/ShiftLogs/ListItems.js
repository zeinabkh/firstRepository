import React, { Componet } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItems = (props) => (
    <TouchableOpacity style={styles.globalView}>
     
            <Text style={styles.textStyle}>{props.startWork}</Text>
            <Text style={styles.textStyle}>{props.endWork}</Text>
            <Text style={styles.textStyle}>{props.workSpan}</Text>
            <Text style={styles.textStyle}>{props.wage}</Text>
       
    </TouchableOpacity>

)
    ;
const styles = StyleSheet.create({
    globalView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 8,
        margin: 8,
        borderBottomColor: "blue",
        borderTopColor:"blue",
        borderRightColor:"white",
        borderLeftColor:"white",
        borderWidth: 2,
        height: 40,
        width: "90%"

    },
    textStyle: {
        width: "20%",
        marginRight: 2,

    }

})


export default ListItems;