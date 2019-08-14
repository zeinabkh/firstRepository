import React, { Component } from 'react'
import {Alert, View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { tsPropertySignature } from '@babel/types';
//import { Ionicons } from '@expo/vector-icons';
import {connect } from 'react-redux'
import {startEdit,deleteNote }from '../../Store/actions/actionIdentify'
import EditeRecord from './EditRecord'
import Note from '../Notes'
import moment from 'moment-jalaali'
class RecordDetails extends Component {


    state = {
        editable: false,
        notes: {},
        edit: false,
        showNotes:false
    }
    enableWriteNote = () => {
        if (this.state.editable === false) {
            this.setState({
                ...this.state,
                editable: true,
                edit:false
            })
        }
    }

    saveNotes = () => {
        this.props.saveNote(this.state.notes)
        //  this.state.editable = false;
    }

    deleteit = () => {
     

            Alert.alert(
                '',
                'این نوبت کاری حذف شود ؟',  
                [
                   {text: 'بازگشت', style: 'cancel'},
                   {text: 'حذف', onPress: () =>   this.props.deletARecord() },
                ],
                { cancelable: false }
           )
         }



      

      
    

    getNote = (value) => {
        this.setState((preState) => {
            return {
                ...preState,
                notes:value
            
            }


        })


    };

    showEditPage = () => {
    
        this.setState(preState => {
            return {
                ...preState,
                edit: true,
              
            }

        })

    this.props.pressEditButton();
    }
    render() {


        return (
            <View style={styles.globalStyle}>
                <EditeRecord close={()=>this.setState({edit:false})}edit={this.state.edit} info={this.props.info} onModalClosed={()=>this.setState(preState=>{
                    return{
                        ...preState,
                        edit:false
                    }
                })}/>
                <Note  delete={key=>this.props.deleteNoteFromRecord(key,this.props.info.startWork,this.props.ListRecord)}seeNotes={this.state.showNotes} Notes={this.props.info.note} close={()=>this.setState({showNotes:false})}/>
                <View style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "20%" }}><Text style={{ fontSize: 20 }}>{(new Date(this.props.startWork).getHours() < 13) ? "شیفت صبح" : "شیفت بعد از ظهر"}</Text></View>
                <View style={styles.detatilIcoStyle}>
                   {/* <Text>{((((new Date(this.props.info.endWork).getTime() - new Date(this.props.info.startWork).getTime())))*this.props.info.wage).toString.concat(":حقوق")}</Text> */}
                </View>
                <View style={styles.noteStyle}>
                    <TouchableOpacity onPress={this.state.editable ? this.saveNotes : () => this.enableWriteNote()}>
                        <View style={[styles.circle, { backgroundColor: "#48d1cc" }]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>Note</Text>
                        </View>
                    </TouchableOpacity >

                    <TextInput editable={this.state.editable} style={{ width: 200, margin: 10, borderBottomColor:this.state.editable?"#48d1cc" : "black", borderBottomWidth: 1, height: 50 }} onChangeText={(value) => this.getNote(value)} placeholder="note" defaultValue={this.props.info.note}  />
{/* <Button title="یادداشت ها" onPress={()=>this.setState({showNotes:true})} /> */}
                </View>
                <View style={styles.detatilIcoStyle}>
                    < TouchableOpacity style={styles.iconStyle} onPress={() => this.showEditPage()}>
                        <View style={[styles.circle, { backgroundColor: "#48d1cc" }]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>ویرایش</Text>
                        </View>

                    </TouchableOpacity  >
                    < TouchableOpacity style={styles.iconStyle} onPress={this.deleteit}>
                        <View style={[styles.circle, { backgroundColor: "#dc143c" }]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>حذف</Text>
                        </View>

                    </TouchableOpacity >
                    < TouchableOpacity style={styles.iconStyle} >
                        <View style={[styles.circle, { backgroundColor: "#dc143c" }]}>
                            <Text style={{ fontSize: 8, fontStyle: "italic", color: "white" }}>i</Text>
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    }
}
);
const mapStateToProps = ({ info, filterInfo, internalState, traceChange, closeEditor }) => {
    //if(internalState===2) {editEnable=closeEditor }  
   
    return {
        //info.reverse()//
        ListRecord: info,
        editEnable: closeEditor

    }
};
const mapDispatchToProps = dispatch => {
    return {
       pressEditButton: () => dispatch(startEdit()),
       deleteNoteFromRecord:(key,keyR,list)=>dispatch(deleteNote(key,keyR,list))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecordDetails);

