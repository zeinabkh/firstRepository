import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, DrawerLayoutAndroid } from 'react-native'
import moment from 'moment-jalaali'

import { addShiftWork } from "./Src/Store/actions/actionIdentify";
import DrawerView from "./Src/Component/DrawerView/DrawerView"
import { connect } from 'react-redux';
class App extends Component {
    static navigationOptions = {
        title: 'Home',
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

        this.timerState = false;
        this.interval = null;
        this.startTime = "";
      

    }


    state = {
        Label: "شروع کار",
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
                    Label: "در حال کار...",
                    TimeString: App.formatTime(this.state.Time),
                    date: moment().format('jMM/jDD'),
                }
            }), 1000);
        }
        if (!this.timerState) {
            clearInterval(this.interval);

            this.setState((preState) => {
                this.props.addRecordShift({
                    startWork: this.startTime,
                    endWork: new Date(),
                    shiftSpanString: preState.TimeString,
                    wage: 20,
                    createAt:moment().format(),
                    note:[]
                  },this.props.listOfShifts);
                return {


                    TimeSpan: 0,
                    Label:"شروع کار ",
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
                          
                           
                            <Text>{timestartShow}</Text>


                        </View>
                         <Text>{this.state.TimeString}</Text>
                        <Button title= {this.timerState ? "stop":"start" }  color="#b22222" style={{padding:8,margin:8}}onPress={this.startTimer} />
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

        width: 300,
        height: 300,
        borderRadius: 150,
        alignItems: "center",
        borderWidth: 5,
        borderColor: "white",
        margin: 50
    },
    Circle: {
        width: 150,
        height: 150,
        borderRadius:75,
        alignItems: "center",
        borderWidth: 5,
        borderColor: "#fa8072"
    },
    TextStyle: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop:20 

    }
})

const mapStateToProps=({info,filterInfo,internalState})=>{
  
    return{
        listOfShifts:info 
        
    }

}
const mapDispatchToProps = dispatch => {
    return {
        addRecordShift: (ShiftWorks , info)=> dispatch(addShiftWork(ShiftWorks,info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)