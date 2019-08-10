import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Picker } from 'react-native'
import ListItems from './ListItems'
import { connect } from 'react-redux'
import moment from 'moment-jalaali'

import { showMonthinf, sortByShiftSpan, sortBydate, deleteRecord, savenoteInRecord } from '../../Store/actions/actionIdentify'
import RecordDetails from './recordDetail';
import App from '../../../App'
import {Footer, Body,Left,Right, Button} from 'native-base'

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

this.C=false ;
    }
    state = {
        year: 1398,
        month: -1,
        selecteRecord: '',
        selecteRecordlock:false

    }
    renderSeparator = () => {

        return (
    
          <View
    
            style={{
    
              height: 1,
    
              width: "86%",
    
              backgroundColor: "#CED0CE",
    
              marginLeft: "14%"
    
            }}
    
          />
    
        );
    
      };
    
    
    
 
    
    selectItem = (record) => {
      
        this.C=!this.C
        this.props.traceChange = !this.props.traceChange
         if(!this.state.selecteRecordlock){
         
        this.setState(preState => {
            return {
                ...preState,
                selecteRecord: record,
                selecteRecordlock:true
            }
        });
     }else{
        this.setState(preState => {
            return {
                ...preState,
                selecteRecord: '',
                selecteRecordlock:false
            }//true}
        });
     }
    }


    selectmonth = (key) => {


        this.setState((preState) => {
            return {
                ...preState,
                month: key
            }
        })

        this.props.addRecordShift(key, this.props.baseInfo);
    }

    sortOptions = (key) => {

        switch (key) {
            case 1:
                this.props.sortbySpanShift(this.props.baseInfo);
                break;
            case 2:
                this.props.sortbyDate(this.props.baseInfo);
                break;
        }
    }

    saveNote = note => {

        this.props.saveNoteRecords(note, this.state.selecteRecord, this.props.baseInfo);
    }
    seeAllNotes = () => {

    }
    deletItem=()=>{
      
        this.props.deleteARecord(this.props.baseInfo,this.state.selecteRecord)
        this.setState(preState => {
            return {
                ...preState,
                selecteRecord: 0
            }//true}
        });
    }
    render() {


        const sumofWages = () => {
            let sum = 0,span=0;
            let time = {};
            let totallTime = "";
            for (i in this.props.listOfShifts) {
                if (moment(this.props.listOfShifts[i].createAt).jMonth() === moment().jMonth())
                    sum = sum + (((new Date(this.props.listOfShifts[i].endWork).getTime() - new Date(this.props.listOfShifts[i].startWork).getTime())))*this.props.listOfShifts[i].wage
          span=span+ (((new Date(this.props.listOfShifts[i].endWork).getTime() - new Date(this.props.listOfShifts[i].startWork).getTime())))
                }

            time = {
                Hour: App.msToTime(span).h,
                Minute: App.msToTime(span).m,
                Second: App.msToTime(span).s
            }
            totallTime = App.formatTime(time)
            sum = Math.fround(sum / 3600000) 
            return { sum, totallTime }

        }

        const Month = [{ name: "همه", num: 0 },
        { name: "فروردین", num: 1 }, { name: "اردیبهشت", num: 2 }, { name: "خرداد", num: 3 },
        { name: "تیر", num: 4 }, { name: "مرداد", num: 5 }, { name: "شهریور", num: 6 },
        { name: "مهر", num: 7 }, { name: "آبان", num: 8 }, { name: "آذر", num: 9 },
        { name: "دی", num: 10 }, { name: "بهمن", num: 11 }, { name: "اسفند", num: 12 }];
        const temp = this.props.traceChange;

        return (


            <View style={styles.globalStyle}>
                <View style={[styles.pickersStyle, { backgroundColor: '#fa8072' }]}>
                    <Picker
                        style={{ height: 50, width: "30%", borderRightColor: "black" }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.selectmonth(itemValue)}


                    >
                        <Picker.Item label={this.state.month===-1? "ماه":Month[this.state.month].name} value={-1} />

                        {Month.map(month => {
                            return (<Picker.Item label={month.name} key={month.num}
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

                {/* <View style={{ width: "100%", height: 320 }}> */}
                    <FlatList
                        //   ListFooterComponent={<Footer count={this.props.baseInfo.length} totalWage={sumofWages()} />}
                        data={this.props.listOfShifts}
                        extraData={[this.props,this.state]}
                        ItemSeparatorComponent={this.renderSeparator}
                      //  ListFooterComponentStyle={{ height: 50 }}
                   //     ListFooterComponent={<Footer count={this.props.baseInfo.length} totalWage={sumofWages().sum} Hours={sumofWages().totallTime} />}
                        keyExtractor={item => item.startWork}
                        renderItem={(info) => {
                            
                            return (
                                <View  >
                                    <ListItems
                                        startWork={info.item.startWork}
                                        endWork={info.item.endWork}
                                        workSpan={info.item.shiftSpanString}
                                        wage={info.item.wage}
                                        dateRecord={info.item.createAt}
                                        onItemSelected={() => this.selectItem(new Date(info.item.startWork).getTime())}
                                        itemselectCreatAt={info.item.startWork}
                                    //  visible={( new Date(this.state.selecteRecord.createAt)==new Date(info.item.createAt))?true :false}
                                    />
                                    {this.state.selecteRecord === new Date(info.item.startWork).getTime() ? (<RecordDetails startWork={info.item.startWork}
                                        saveNote={this.saveNote}
                                       // seeAllNotes={() => this.seeAllNotes()}
                                        deletARecord={()=>this.deletItem()}
                                        info={info.item} />) :null}


                                </View>


                            )
                        }
                        }
                    />
            
               <Footer style={{ backgroundColor: "#fa8072", height: 50 }} >
                    <Left>
                      <Text>{"تعداد شیفت ها :".concat(this.props.listOfShifts.length)}</Text>
                    </Left>
                    <Body>
                      <Text>{"مجموع حقوق:".concat(sumofWages().sum )}</Text>
                    </Body>
                    <Right>
                  <Text>{"مجموع زمان:".concat( sumofWages().totallTime)}</Text>
                    </Right>
                   </Footer>
            </View>)
    }
}

const styles = StyleSheet.create({
    globalStyle: {

        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex:1,
        width: "100%"


    },
    headerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderWidth: 2,
        margin: 5,
        marginTop:0,
        padding: 5,
        borderRightColor: "white",
        borderLeftColor: "white",
        borderBottomColor: "#ff6347",
        borderTopColor: "#ff6347",
        width: "100%"
    },
    headerTextStyle: {
        width: "18%",
        flexDirection: "row",
        alignItems: "center"
    },
    pickersStyle: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: 50,
        width: "100%",

    }

})

const mapStateToProps = ({ info, filterInfo, internalState, traceChange,baseWage,overTimeWage, endTime }) => {

    return {
        //info.reverse()//
        listOfShifts: (internalState === 0||internalState === 1) ? info.reverse() : filterInfo,
        traceChange: traceChange,
        baseInfo: info.reverse(),
        baseWage:baseWage,
        endTime:endTime,
        overTimeWage:overTimeWage
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addRecordShift: (key, info) => dispatch(showMonthinf(key, info)),
        sortbySpanShift: (info) => dispatch(sortByShiftSpan(info)),
        sortbyDate: (info) => dispatch(sortBydate(info)),
        saveNoteRecords: (note, key, info) => dispatch(savenoteInRecord(note, key, info)),
        deleteARecord: (info, key) => dispatch(deleteRecord(info, key))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShiftLogScreen);
