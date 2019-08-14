import React,{Compnent} from 'react'

export default class wageCalculator extends Compnent {


    static updateWages(startTime,endTime,baseWage,overTimeWage){

        let wageHour = 0
     
        if (new Date(startTime).getHours() > 21)
            wageHour = baseWage * (new Date().getTime() - new Date(startTime).getTime()) *overTimeWage
        else if (new Date().getHours() < 22)
            wageHour =( baseWage * (new Date(endTime).getTime() - new Date(startTime).getTime()) )
        else if(new Date(startTime).getHours() < 22&&new Date(endTime).getHours() > 21 ){
        wageHour = this.props.baseWage * (new Date(new Date(endTime).setHours(22,0,0,0)).getTime() - new Date(startTime).getTime())
        wageHour=wageHour+ baseWage * (new Date(endTime).getTime() - new Date (new Date(endTime).setHours(22,0,0,0)).getTime())* overTimeWage
        }

        return Math.round(wageHour/3600000)
    }
}