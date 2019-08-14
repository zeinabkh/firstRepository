import React, { Component } from 'react'
import { View, ScrollView, Modal, Text, TextInput, TouchableOpacity } from 'react-native'
import { setandUpdateHourlyWages, setWage } from '../Store/actions/actionIdentify'
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux'
import { Header, Footer, Left, Right, Body } from 'native-base'
class WageSetting extends Component {
    constructor(props) {
        super(props)
    }
    state = {

        HourlyWage: this.props.HourlyWage,
        overTimeWage: this.props.overTimeWage,
        endTime: this.props.endTime,
        status: true
    }

    setHourlyWage = (HourlyWage, overTimeWage, endTime, baseInfo) => {
        this.props.setWages(HourlyWage, overTimeWage/100, endTime, baseInfo)
    }
    setandUpdateHourlyWage = (HourlyWage, overTimeWage, endTime, baseInfo) => {
        this.props.setUpdateWages(HourlyWage, overTimeWage/100, endTime, baseInfo)
    }

    render() {
        const v = true;
        return (
            <Modal visible={this.props.open}

            >
                <Header style={{ backgroundColor: "#fa8072" }}>
                  
                </Header>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: "flex-start", alignContent: 'center'
                }}>

                    <ScrollView>
                        <View style={{
                            width: "100%",
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center', marginTop: 20, height: 200,
                        }}>
                            <View style={{
                                width: "100%",
                                height: 50, flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 20,
                                backgroundColor: "#ff6347",
                                padding: 10,
                                margin: 10

                            }}>
                                <Text style={{ width: 80, fontSize: 10, fontWeight: 'bold' }}>تومان </Text>
                                <TextInput style={{ margin: 10, width: 80, borderBottomColor: this.state.border ? "red" : "black", borderBottomWidth: 1, borderBottomWidth: 1 }}
                                    onChangeText={vlaue =>
                                        this.setState(prestate => {
                                            return {
                                                ...prestate,
                                                HourlyWage: parseInt(vlaue)
                                            }
                                        })
                                    } />
                                <Text style={{ width: 80, fontSize: 15, fontWeight: 'bold' }}>حقوق پایه : </Text>
                            </View>

                            <View style={{
                                width: "100%",
                                height: 50, flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 20,
                                padding: 10,
                                backgroundColor: "#ff6347",
                                margin: 10

                            }}>
                                <Text style={{ width: 100, fontSize: 20, fontWeight: 'bold' }}>%</Text>
                                <TextInput
                                    style={{ margin: 10, width: 80, borderBottomColor: 'black', borderBottomWidth: 1 }}
                                    onChangeText={vlaue =>
                                        this.setState(prestate => {
                                            return {
                                                ...prestate,
                                                overTimeWage: parseInt(vlaue)/100
                                            }
                                        })} />
                                <Text style={{ width: 100, fontSize: 8, fontWeight: 'bold' }}>درصد اضافه حقوق شیفت شب</Text>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: "center", padding: 20, margin: 20 }}>
                            
                        </View>


                    </ScrollView>
                </View>
                <Footer style={{ backgroundColor: "#fa8072", height: 50 }} >
                    <Left>
                       
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPressOut={this.props.close} onPress={() => this.setHourlyWage(this.state.HourlyWage, this.state.overTimeWage, this.endTime, this.props.baseInfo)
                        }>
                            <Text>ذخیره  </Text>
                        </TouchableOpacity>
                        
                    </Left>
                    <Body>
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPress={this.props.close}
                        >
                            <Text>
                                بازگشت
                            </Text>
                        </TouchableOpacity>
                    </Body>
                    <Right>
                     
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPressOut={this.props.close} onPress={() => this.setandUpdateHourlyWage(this.state.HourlyWage, this.state.overTimeWage, this.endTime, this.props.baseInfo)
                        }>
                            <Text>ذخیره و بروز رسانی </Text>
                        </TouchableOpacity>
                      
                    </Right>

                </Footer>
            </Modal>

        )
    }

}
const mapStateToProps = ({ info, filterInfo, internalState, traceChange, baseWage, overTimeWage, endTime }) => {

    return {

        baseInfo: info,
        HourlyWage: baseWage,
        endTime: endTime,
        overTimeWage: overTimeWage
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setUpdateWages: (wage, overTimeWage, endTime, info) => dispatch(setandUpdateHourlyWages(wage, overTimeWage, endTime, info)),
        setWages: (wage, overTimeWage, endTime, info) => dispatch(setWage(wage, overTimeWage, endTime, info))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WageSetting);