import React, { Component } from 'react';
import { StyleSheet, Modal, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-jalaali'
import { addShiftWork } from '../../Store/actions/actionIdentify'
import { connect } from 'react-redux'
import { Header, Footer, FooterTab, Left, Button, Body, Right, Title } from 'native-base'
import App from '../../../App'
import { LocaleConfig } from 'react-native-calendars-persian';
const PersianCalendarPicker = require('react-native-persian-calendar-picker');
LocaleConfig.defaultLocale = 'ir';
class AddRecord extends Component {
    state = {
        record: {
            startWork:'',
            endWork:''
        },
status:true


    }
  
    AddRecordHandler = (record, list, stat) => {

        const span = new Date(record.endWork).getTime() - new Date(record.startWork).getTime()

        const time = {
            Hour: App.msToTime(span).h,
            Minute: App.msToTime(span).m,
            Second: App.msToTime(span).s
        }
        const timeSpan = App.formatTime(time)


        this.props.setAddRecord({
            ...record, shiftSpanString: timeSpan,
            note: []
        }, list, stat)
    }

    render() {
let v=true;
        return (
            <Modal visible={( this.props.open)}
          
               onDismiss={  () => this.setState({ status: true })}>
          

                <Header style={{ backgroundColor: "#fa8072" }}>
                  
                    <Right>
                        <Title style={{ margin: 20, fontWeight: "bold", fontSize: 20, fontStyle: 'italic' }}>افزودن نوبت کاری</Title>
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
                            borderBottomColor: "#d3d3d3",

                        }}>
                            <Text style={{ fontWeight: "bold" }}>تومان</Text>
                            <TextInput style={{
                                borderBottomColor: "black",
                                borderBottomWidth: 1, marginRight: 30,
                                width: 80,
                                marginBottom: 10,
                                marginLeft: 20
                            }}
                                /// placeholder={this.props.info.wage.toString()}
                                onChangeText={(newWage) => {
                                    this.setState(preState => {
                                        return {
                                            ...preState,
                                            record: {
                                                ...preState.record,
                                                wage: parseInt(newWage)
                                            }
                                        }
                                    })
                                }}></TextInput>
                            <Text style={{ marginRight: 8 }}>حقوق </Text>

                        </View>
                        <View style={{
                            width: "100%",
                            height: 180, flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            borderBottomWidth: 2,
                            borderBottomColor: "#d3d3d3"
                        }}>
                            <View style={{ width: "100%", height: 30, alignItems: "center", margin: 8 ,padding:5}}>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>ساعت کاری</Text>
                            </View>
                            <View style={{
                                width: "100%",
                                height: 150, 
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center",
                             
                            }}>
                                <View style={{
                                    width: "100%",
                                    height: 50,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 8,
                                    marginRight: 8
                                }}>
                                    <Text style={{ margin: 10, fontWeight: "bold" }}>ساعت شروع </Text>
                                    <Text style={{ margin: 10, fontWeight: "bold" }}>ساعت اتمام</Text>
                                </View>

                                <View style={{
                                    width: "100%",
                                    height: 100,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>

                                   

                                        <DatePicker
                                            style={{ width: 100 }}
                                            date={new Date(this.state.record.startWork)} //initial date from state
                                            mode="time" //The enum of date, datetime and time
                                            placeholder="select date"
                                            format="HH:MM"
                                            minDate="00:00"
                                            maxDate="23:59"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                            }}
                                            onDateChange={(str, date) => {

                                                this.setState(this.setState(preState => {
                                                    return {
                                                        ...preState,
                                                        record: {
                                                            ...preState.record,
                                                            startWork: date
                                                        }
                                                    }
                                                }))
                                            }}
                                        />
                                
                                

                                        <DatePicker
                                            style={{ width: 100 }}
                                            date={new Date(this.state.record.endWork)} //initial date from state
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
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                            }}
                                            onDateChange={(str, date) => {

                                                this.setState(preState => {
                                                    return {
                                                        ...preState,
                                                        record: {
                                                            ...preState.record,
                                                            endWork: date
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                 
                                </View>
                            </View>
                        </View>
                     
                            <View style={{ width: "100%", height: 50, alignItems: "center" }}>
                                <Text>تاریخ</Text>
                            </View>
                         


                      
                        <PersianCalendarPicker
                            // 
                              onDateChange={(date)=> {

                                this.setState(preState => {
                                    return {
                                        ...preState,
                                        record: {
                                            ...preState.record,
                                            createAt:moment(new Date(date)).format()
                                        }
                                    }
                                })
                            }
                               }
                            previousTitle="ماه قبل"
                            nextTitle="ماه بعد "
                        />

                    </ScrollView>
                    <Footer style={{ backgroundColor: "#fa8072", height: 50,width:"100%" }} >
                    <Left>
                        {/* <View style={{ alignItems: "center", width: "100%", height: 50, backgroundColor: "#fa8072" }}> */}
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPressOut={this.props.close} onPress={() => {
                            this.AddRecordHandler(this.state.record, this.props.ListRecord, true)
                            this.setState({
                                status: false
                            })
                        }}>
                            <Text>ذخیره  </Text>
                        </TouchableOpacity>
                   
                    </Left>
                    <Right>
                     
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPress={this.props.close
                        }>
                            <Text>بازگشت</Text>
                        </TouchableOpacity>
                      
                    </Right>

                </Footer>
                </View>
               

            </Modal >

        );
    }
}
const styles = StyleSheet.create({
    container: {
  flex:1,
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


const mapStateToProps = ({ info, filterInfo, internalState, traceChange, closeEditor }) => {
    //if(internalState===2) {editEnable=closeEditor }  

    return {
        //info.reverse()//
        ListRecord: info,
        pageState: internalState,

    }
};
const mapDispatchToProps = dispatch => {
    return {
        setAddRecord: (record, list, stat) => dispatch(addShiftWork(record, list, stat))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddRecord);
