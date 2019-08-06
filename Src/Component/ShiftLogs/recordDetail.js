import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { tsPropertySignature } from '@babel/types';
//import { Ionicons } from '@expo/vector-icons';



class RecordDetails extends Component {


    state = {
        editable: false,
        notes: ""
    }
    enableWriteNote = () => {
        if (this.state.editable === false) {
            this.setState({
                ...this.state,
                editable: true
            })
        }
    }

    saveNotes = () => {
        this.props.saveNote(this.state.notes)
        //  this.state.editable = false;
    }

    deleteit = () => {
        alert("in detail")
        this.props.deletARecord()
    }

    getNote = (value) => {
        this.setState((preState) => {
            return {
                ...preState,
                notes: value
            }


        })


    };
    render() {


        return (
            <View style={styles.globalStyle}>
                <View style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "20%" }}><Text style={{ fontSize: 20 }}>{(new Date(this.props.startWork).getHours() < 13) ? "شیفت صبح" : "شیفت بعد از ظهر"}</Text></View>
                <View style={styles.noteStyle}>
                    <TouchableOpacity onPress={this.state.editable ? this.saveNotes : () => this.enableWriteNote()}>
                        <View style={[styles.circle,  { backgroundColor:"#48d1cc"}]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>edit</Text>
                        </View>
                    </TouchableOpacity >

                    <TextInput editable={this.state.editable} style={{ width: 200, margin: 10, borderBottomEndRadius:"black",borderBottomWidth:1, height: 50 }} onChangeText={(value) => this.getNote(value)} /*placeholder={} */ />
                    <Button title="Notes" onPress={this.props.seeAllNotes} />
                </View>
                <View style={styles.detatilIcoStyle}>
                    < TouchableOpacity style={styles.iconStyle}>
                    <View style={[styles.circle,  { backgroundColor:"#48d1cc"}]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>edit</Text>
                        </View>

                    </TouchableOpacity  >
                    < TouchableOpacity style={styles.iconStyle} onPress={this.deleteit}>
                    <View style={[styles.circle,  { backgroundColor:"#dc143c"}]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>delete</Text>
                        </View>

                    </TouchableOpacity >
                    < TouchableOpacity style={styles.iconStyle} >
                    <View style={[styles.circle,  { backgroundColor:"#dc143c"}]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>delete</Text>
                        </View>

                    </TouchableOpacity >

                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({

    globalStyle: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 250,
        margin: 10,
        padding: 10,
        width: "100%",
        borderBottomColor: "#ff6347",
        borderBottomWidth: 2
    },
    noteStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "50%"

    },
    detatilIcoStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        //  alignItems: "center",
        width: "100%",
        height: 30
    },
    iconStyle: {
        width: "30%",
        alignItems: "center"
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 2,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"

    }
}
);


export default RecordDetails;