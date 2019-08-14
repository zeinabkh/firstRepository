import React, { Component } from 'react';
import { StyleSheet, Modal, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import DatePicker from 'react-native-datepicker';
import moment from 'moment-jalaali'
import { setEditRescordInfo } from '../../Store/actions/actionIdentify'
import { connect } from 'react-redux'
import { Header, Footer, FooterTab, Left, Button, Body, Right, Title } from 'native-base'
import wageCalculator from '../../Store/Tools/updateWages'
const PersianCalendarPicker = require('react-native-persian-calendar-picker');
//const PersianCalendarPicker = require('react-native-persian-calendars');
// import PersianCalendarPicker from 'react-native-general-calendars'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars-persian';
import { networkInterfaces } from 'os';




class EditeRecord extends Component {
    state = {
        selectedTimeE: new Date(this.props.info.endWork),

        selectedTimeS: new Date(this.props.info.startWork),
        editState: this.props.edit,
        dateSelected: this.props.info.createAt,
        newWage:this.props.baseWage

    }


    setEditRecordHandler = (newDate, newWage, newTimeS, newTimeE, ListRecord, key) => {
alert(this.props.overTimeWage)
// alert((new Date(new Date(newTimeE).setHours(22,0,0,0)).getTime() - new Date(newTimeS).getTime()))
     

        this.props.setEditRecord(newDate,wageCalculator.updateWages(newTimeS,newTimeE,this.props.baseWage,this.props.overTimeWage), newTimeS, newTimeE, ListRecord, key)
    }

    render() {

        return (
            <Modal visible={ this.props.edit }
                onRequestClose={this.props.onModalClosed}

                animationType="slide">

                <Header style={{ backgroundColor: "#fa8072" }}>

                    <Right>
                        <Title style={{ margin: 20, fontWeight: "bold", fontSize: 20, fontStyle: 'italic' }}>ویرایش</Title>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{
                            width: "100%",
                            height: 50, flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",

                            borderBottomColor: "#d3d3d3"
                        }}>
                        </View>


                        <View style={{
                            width: "100%",
                            height: 50, flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            borderBottomWidth: 2,
                            borderBottomColor: "#d3d3d3"
                        }}>
                            <Text style={{ fontWeight: "bold" }}>تومان</Text>
                            <TextInput style={{
                                borderBottomColor: "black",
                                borderBottomWidth: 1, marginRight: 30,
                                width: 50
                            }}
                                placeholder={this.props.info.wage.toString()}
                                onChangeText={(newWage) => {
                                    this.setState({
                                        newWage: newWage
                                    })
                                }}></TextInput>
                            <Text style={{ marginRight: 8 }}>دستمزد هر ساعت کاری</Text>

                        </View>
                        <View style={{
                            width: "100%",
                            height: 200, flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            borderBottomWidth: 1,
                            borderBottomColor: "#d3d3d3"
                        }}>
                            <View style={{ width: "100%", height: 30, alignItems: "center" }}>
                                <Text style={{ fontSize: 30, fontWeight: "bold" }}>ساعت کاری</Text>
                            </View>
                            <View style={{
                                width: "100%",
                                height: 170, flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center",

                            }}>
                                <View style={{
                                    width: "100%",
                                    height: 50,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 20,
                                    marginRight: 20
                                }}>
                                    <Text style={{ margin: 10, fontWeight: "bold" }}>ساعت شروع </Text>
                                    <Text style={{ margin: 10, fontWeight: "bold" }}>ساعت اتمام</Text>
                                </View>

                                <View style={{
                                    width: "100%",
                                    height: 120,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>

                                    <View >

                                        <DatePicker
                                            style={{ width: 100 }}
                                            date={new Date(this.state.selectedTimeS)} //initial date from state
                                            mode="time" //The enum of date, datetime and time
                                            placeholder="select date"
                                            format="HH:MM"
                                            minDate="00:00"
                                            maxDate="23:59"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            // customStyles={{
                                            //     dateIcon: {
                                            //         position: 'absolute',
                                            //         left: 0,
                                            //         top: 4,
                                            //         marginLeft: 0
                                            //     },
                                            //     dateInput: {
                                            //         marginLeft: 36
                                            //     }
                                            // }}
                                            onDateChange={(str, date) => (str, date) => this.setState(preState => {
                                                return {
                                                    ...preState,
                                                    selectedTimeS: date
                                                }
                                            })}
                                        />
                                    </View>

                                    <View style={styles.container}>

                                        <DatePicker
                                            style={{ width: 100 }}
                                            date={new Date(this.state.selectedTimeE)} //initial date from state
                                            mode="time" //The enum of date, datetime and time
                                            placeholder="select date"
                                            format="HH:MM"
                                            //    minDate="00:00"
                                            //   maxDate="23:59"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                            //     dateInput: {
                                            //         marginLeft: 36
                                            //     }
                                            }}
                                            onDateChange={(str, date) => this.setState(preState => {
                                                return {
                                                    ...preState,
                                                    selectedTimeE: date
                                                }
                                            })}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            height: 200, flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            borderBottomWidth: 1,
                            borderBottomColor: "#d3d3d3"
                        }}>
                            <View style={{ width: "100%", height: 50, alignItems: "center" }}>
                                <Text>تاریخ</Text>
                            </View>






                        </View>
                        <PersianCalendarPicker
                            onDateChange={(date) => this.setState(preState => {
                         //  alert(moment(date).format())
                                return {
                                    ...preState,
                                    dateSelected:moment(date).format()
                                }
                            })}
                            previousTitle="ماه قبل"
                            nextTitle="ماه بعد "
                        />
                    </ScrollView>

                </View>
                <Footer style={{ backgroundColor: "#fa8072", height: 50 }} >
                 <Left>
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPressOut={this.props.close}  onPress={() => this.setEditRecordHandler(this.state.dateSelected, this.state.newWage, this.state.selectedTimeS, this.state.selectedTimeE, this.props.ListRecord, this.props.info.startWork)}>
                            <Text>ثبت تغییرات </Text>
                        </TouchableOpacity>
                        </Left> 
                    <Right>
                     
                     <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPress={this.props.close
                     }>
                         <Text>بازگشت</Text>
                     </TouchableOpacity>
                   
                 </Right>

                </Footer>

            </Modal >

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dateStyle: {

    },
    timeStyle: {

    },
    headerStyle: {

    }
});


const mapStateToProps = ({ info, filterInfo, internalState, traceChange, closeEditor,baseWage,overTimeWage,endTime }) => {
    //if(internalState===2) {editEnable=closeEditor }  

    return {
        //info.reverse()//
        ListRecord: info,
        editEnable: closeEditor,
        baseWage: baseWage,
        endTime: endTime,
        overTimeWage: overTimeWage


    }
};
const mapDispatchToProps = dispatch => {
    return {
        setEditRecord: (newDate, newWage, newTimeS, newTimeE, List, key) => dispatch(setEditRescordInfo(newDate, newWage, newTimeS, newTimeE, List, key))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditeRecord);
