import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, DrawerLayoutAndroid } from 'react-native'
import moment from 'moment-jalaali'
import { DrawerLayout } from 'react-native-gesture-handler'
//import addShiftWork from "./Src/Store/actions/index"
import { addShiftWork } from "./Src/Store/actions/actionIdentify";
import DrawerView from "./Src/Component/DravwerView/DrawerView"
import { connect } from 'react-redux';
class App extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    
    


    constructor(props) {
        super(props)

        this.timerState = false;
        this.interval = null;
        this.startTime = "";

    }


    state = {
        Label: "Clock",
        TimeString: "",
        WageWork: 0.00,
        Time: {
            Hour: 0,
            Minute: 0,
            Second: 0
        },
        TimeSpan: 0,
        date: null,
        ShiftWorks: []
    }

    static msToTime(ms) {

        const milliseconds = ms % 1000;

        const ms1 = (ms - milliseconds) / 1000;

        const seconds = ms1 % 60;

        const ms2 = (ms1 - seconds) / 60;

        const minutes = ms2 % 60;

        const hours = (ms2 - minutes) / 60;



        return {

            h: hours,

            m: minutes,

            s: seconds

        };

    }



    static formatTime(time) {

        const pad = (n, z = 2) => `00${n}`.slice(-z);

        return `${pad(time.Hour)}:${pad(time.Minute)}:${pad(time.Second)}`;

    }
    static formatTime2(time) {

        const pad = (n, z = 2) => `00${n}`.slice(-z);

        return `${pad(time.Hour)}:${pad(time.Minute)}`;

    }

    startTimer = () => {

        this.timerState = !this.timerState;
        /*let m=moment().loadPersian({
            usePersionDigits:true,
            dialect:'persiom-modern'
        })*/
        if (this.timerState) {
            this.startTime = new Date()
            this.interval = setInterval(() => this.setState((preState) => {
                return {
                    ...preState,
                    Time: {
                        Hour: App.msToTime(preState.TimeSpan).h,
                        Minute: App.msToTime(preState.TimeSpan).m,
                        Second: App.msToTime(preState.TimeSpan).s
                    },
                    TimeSpan: new Date() - this.startTime,
                    Label: "Shifting",
                    TimeString: App.formatTime(this.state.Time),
                    date: moment().format('jMM/jDD'),
                }
            }), 1000);
        }
        if (!this.timerState) {
            clearInterval(this.interval);

            this.setState((preState) => {
                this.props.addRecordShift({
                    year:moment().jYear(),
                    month:moment().jMonth(),
                    
                    shiftSpan: preState.TimeSpan,
                    dateRecord: preState.date,
                    startWork: this.startTime.getHours().toString().concat(":", this.startTime.getMinutes().toString()),
                    endWork: new Date().getHours().toString().concat(":", new Date().getMinutes().toString()),
                    shiftSpanString: preState.TimeString,//App.formatTime2(this.state.ShiftWorks.TimeForEnd),
                    wage: 20

                });
                return {


                    TimeSpan: 0,
                    Label: "Work End !!",
                    TimeString: "",
                    date: "",
                    Time: {
                        Hour: 0,
                        Minute: 0,
                        Second: 0
                    }
                }
            })


        }
    }


    render() {

        let timestartShow = this.timerState ? this.startTime.getHours().toString().concat(":", this.startTime.getMinutes().toString()) : "";
        return (

            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => DrawerView}>
                <View style={styles.Containar}>
                    <View style={styles.Circleout}>
                        <View style={styles.Circle}>
                            <Text style={styles.TextStyle}>{this.state.Label}</Text>
                            <Text>{this.state.date}</Text>
                            <Text>{this.state.TimeString}</Text>
                            <Text>{timestartShow}</Text>


                        </View>
                        <Button title="start" onPress={this.startTimer} />
                    </View>
                    <View >

                    </View>
                </View>
                </DrawerLayoutAndroid>





        )
    }
}

const styles = StyleSheet.create({
    Containar: {
        alignItems: "center",
        justifyContent: "center"
    },
    Circleout: {

        width: 250,
        height: 250,
        borderRadius: 125,
        alignItems: "center",
        borderWidth: 5,
        borderColor: "black",
        margin: 50
    },
    Circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: "center",
        borderWidth: 10,
        borderColor: "pink"
    },
    TextStyle: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 10

    }
})


const mapDispatchToProps = dispatch => {
    return {
        addRecordShift: ShiftWorks => dispatch(addShiftWork(ShiftWorks))
    }
}

export default connect(null, mapDispatchToProps)(App)