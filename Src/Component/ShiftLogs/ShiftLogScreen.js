import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Picker } from 'react-native'
import ListItems from './ListItems'
import { connect } from 'react-redux'
import moment from 'moment-jalaali'
import PickerItem from './PickersComponent'
import { showMonthinf, sortByShiftSpan, sortBydate } from '../../Store/actions/actionIdentify'
class ShiftLogScreen extends Component {
    static navigationOptions = {
        title: moment().format('jMM/jDD'),
        headerStyle: {
            backgroundColor: '#fa8072',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props)
    }
    state = {
        year: 1398,
        month: 0
    }


    selectmonth = (key) => {
        this.setState((preState) => {
            return {
                ...preState,
                month: key
            }
        })
        alert("done")
        this.props.addRecordShift(key);
    }

    sortOptions = (key) => {
        switch (key) {
            case 1:
                this.props.sortbySpanShift();
                break;
            case 2:
                this.props.sortbyDate();
                break;
        }
    }
    render() {
        const Month = [{ name: "همه", num: 0 },
        { name: "فروردین", num: 1 }, { name: "اردیبهشت", num: 2 }, { name: "خرداد", num: 3 },
        { name: "تیر", num: 4 }, { name: "مرداد", num: 5 }, { name: "شهریور", num: 6 },
        { name: "مهر", num: 7 }, { name: "آبان", num: 8 }, { name: "آذر", num: 9 },
        { name: "دی", num: 10 }, { name: "بهمن", num: 11 }, { name: "اسفند", num: 12 }];
        return (
            <View style={styles.globalStyle}>
                <View style={[styles.pickersStyle, { backgroundColor: '#fa8072' }]}>
                    <Picker
              //      selectedValue={Month[this.state.month].name}

                        style={{ height: 50, width: "30%", borderRightColor: "black" }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.selectmonth(itemValue)}


                    >
                        <Picker.Item label="ماه" value={-1} />

                        {Month.map(month => {
                            return (<Picker.Item label={month.name}
                                value={month.num}
                            />)
                        })}
                    </Picker>

                    <Picker selectedValue="مرتب سازی"
                        onValueChange={(itemValue, itemIndex) => this.sortOptions(itemValue)}
                        style={{ height: 50, width: "30%", borderRightColor: "black" }}
                    >
                        <Picker.Item label="مرتب سازی" />
                        <Picker.Item label="زمان شیفت" value={1} />
                        <Picker.Item label="ساعت شروع " value={2} />
                    </Picker>


                    <Picker
                        selectedValue={this.state.year}
                        style={{ height: 50, width: "30%", borderRightColor: "black" }}
                     /*   onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })}*/>
                        <Picker.Item label="1398" value="1392" />
                        <Picker.Item label="1397" value="1397" />
                    </Picker>
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>حقوق  </Text>
                    <Text style={styles.headerTextStyle}>مدت زمان</Text>
                    <Text style={styles.headerTextStyle}>پایان</Text>
                    <Text style={styles.headerTextStyle}>شروع</Text>
                    <Text style={styles.headerTextStyle}>تاریخ  </Text>




                </View>

                <View style={{ width: "100%" }}>
                    <FlatList

                        //  style={styles.listContainer}
                        data={this.props.listOfShifts}
                        renderItem={(info) => {

                            if (info.item.visible === true) {
                                return (

                                    <ListItems

                                        startWork={info.item.startWork}
                                        endWork={info.item.endWork}
                                        dateRecord={info.item.dateRecord}
                                        workSpan={info.item.shiftSpanString}
                                        wage={info.item.wage}
                                        visible={info.item.visible}
                                        date={info.item.date}
                                    />
                                )
                            }
                        }}
                    />
                </View>
            </View>)


    }
}

const styles = StyleSheet.create({
    globalStyle: {

        justifyContent: "flex-start",
        alignItems: "flex-start",
       
        width:"100%"


    },
    headerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderWidth: 2,
        margin: 5,
        padding: 5,
        borderRightColor: "white",
        borderLeftColor: "white",
        borderBottomColor: "#ff6347",
        borderTopColor: "#ff6347",
        width:"100%"
    },
    headerTextStyle: {
        width: "18%",
        flexDirection:"row",
        alignItems:"center"
    },
    pickersStyle: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: 50,
        width: "100%"
    }

})

const mapStateToProps = ({ info, filterInfo,internalState }) => {

    return {
        //info.reverse()//
        listOfShifts: (internalState===0)?info.reverse():filterInfo
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addRecordShift: key => dispatch(showMonthinf(key)),
        sortbySpanShift: () => dispatch(sortByShiftSpan()),
        sortbyDate: () => dispatch(sortBydate())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShiftLogScreen);
