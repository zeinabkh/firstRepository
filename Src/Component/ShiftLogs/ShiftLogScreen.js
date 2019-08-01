import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Picker } from 'react-native'
import ListItems from './ListItems'
import { connect } from 'react-redux'
import moment from 'moment-jalaali'
import PickerItem from './PickersComponent'
class ShiftLogScreen extends Component {
    static navigationOptions = {
        title: moment().format('jMM/jDD'),
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

selectmonth=(key)=>{

}
    constructor(props) {
        super(props)
    }
    state = {
        year: 1398,
        month:moment().jMonth()
    }
    render() {
        const Month = [
            { name: "فروردین", num: 1 }, { name: "اردیبهشت", num: 2 }, { name: "خرداد", num: 3 },
            { name: "تیر", num: 4 }, { name: "مرداد", num: 5 }, { name: "شهریور", num: 6 },
            { name: "مهر", num: 7 }, { name: "آبان", num: 8 }, { name: "آذر", num: 9 },
            { name: "دی", num: 10 }, { name: "بهمن", num: 11 }, { name: "اسفند", num: 12 }];
        return (
            <View style={styles.globalStyle}>
                <View style={[styles.pickersStyle, { backgroundColor: '#f4511e' }]}>
                    <Picker
                        selectedValue={this.state.month}
                        style={{ height: 50, width: "30%", borderRightColor: "black" }}
                        onValueChange={(itemValue, itemIndex) =>
                       this.selectmonth(itemValue) }
                        

                    >
                        <Picker.Item label={month[this.state.month].name} />
                        {Month.filter((month)=>{
                            return month.num!==this.state.month ;
                        }).map(month => {
                            return (<Picker.Item label={month.name} 
                                value={month.num}
                            />)
                        })}
                    </Picker>

                    <Picker selectedValue="مرتب سازی"
                        style={{ height: 50, width: "30%", borderRightColor: "black" }}
                    >
                        <Picker.Item label="مرتب سازی" />
                        <Picker.Item label="زمان شیفت" value="shifSpan"/>
                        <Picker.Item label="ساعت شروع " />
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

                    <Text style={styles.headerTextStyle}>DATE</Text>
                    <Text style={styles.headerTextStyle}>START</Text>
                    <Text style={styles.headerTextStyle}>END</Text>
                    <Text style={styles.headerTextStyle}>HOURS</Text>
                    <Text style={styles.headerTextStyle}>WAGE</Text>
                </View>

                <View style={{ width: "100%" }}>
                    <FlatList

                        //  style={styles.listContainer}
                        data={this.props.listOfShifts}
                        renderItem={(info) => (
                            <ListItems

                                startWork={info.item.startWork}
                                endWork={info.item.endWork}
                                dateRecord={info.item.dateRecord}
                                workSpan={info.item.shiftSpanString}
                                wage={info.item.wage}

                            />
                        )}
                    />
                </View>
            </View>)


    }
}

const styles = StyleSheet.create({
    globalStyle: {

        justifyContent: "flex-start",
        alignItems: "flex-start",



    },
    headerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 5,
        margin: 5,
        borderWidth: 2,
        borderColor: "black"
    },
    headerTextStyle: {
        width: "20%"
    },
    pickersStyle: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: 50,
        width: "100%"
    }

})

const mapStateToProps = (state) => {

    return {

        listOfShifts: state//.reverse()
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addRecordShift: key => dispatch(showMonthinfo(key))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShiftLogScreen);
