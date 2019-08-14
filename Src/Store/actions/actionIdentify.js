import { RECORDSHIFTWORK, DELETE_ITEM,DELETE_NOTE, SET_NEW_WAGE, SET_UPDATE_NEW_WAGE, EDIT_RECORD, START_EDIT } from './actionTypes'
import { SELECT_A_MONTH } from './actionTypes'
import { SORT_SHIFTSPAN } from './actionTypes'
import { SORT_DATE } from './actionTypes'
import { SAVE_NOTE } from './actionTypes'
import moment from 'moment-jalaali'
import App from '../../../App'
import wageCalculatore from '../Tools/updateWages'
export const addShiftWork = (newShiftWorkRecord, info, state) => {
    //   info.foreach(item=>alert(item.endWork))
    let temp = [];
 

    if (state) {
        return {
            type: RECORDSHIFTWORK,
            payLoad: {
                info: info.concat({ ...newShiftWorkRecord }),
            }
        }
    } else {
        return {
            type: RECORDSHIFTWORK,
            payLoad: {
                info: info,
            }
        }
    }
}

    ;
export const showMonthinf = (key, info) => {
    return {
        type: SELECT_A_MONTH,
        payLoad: {
            filterInfo: key === 0 ? info : info.filter(item => {
                // alert(moment(info.createAt).format('jMM/jDD'))
                // alert(moment(info.createAt))
                return moment(info.createAt).jMonth() + 1 === key
            })
        }
    }
}

export const sortByShiftSpan = (info) => {

    return {
        type: SORT_SHIFTSPAN,
        payLoad: {
            info: info.sort(function (a, b) {
                var spanA = new Date(a.endWork).getTime() - new Date(a.startWork).getTime();
                var spanB = new Date(b.endWork) - new Date(b.startWork);
                return spanA - spanB
            })
        }
    }
}

export const sortBydate = (info) => {

    return {
        type: SORT_DATE,
        payLoad: {
            info: info.sort(function (a, b) {

                var dateA = new Date(a.endWork), dateB = new Date(b.endWork)
                return dateA - dateB

            })
        }
    }
}

export const deleteRecord = (info, key) => {

    return {
        type: DELETE_ITEM,
        payLoad: {
            info: info.filter(item => {
                return new Date(item.startWork).getTime() !== key
            })
        }
    }
}

export const savenoteInRecord = (note, key, info) => {
    const temp = [];
    
    for (i in info) {
       
        if (new Date(key).getTime() === new Date(info[i].startWork).getTime()) {
            temp.push({
                ...info[i],
                note: info[i].note.concat(note)
            })

        }

        else {
            temp.push({
                ...info[i]
            })
        }
    }

    return {
        type: SAVE_NOTE,
        payLoad: {
            info: temp
        }
    }
}

export const setandUpdateHourlyWages = (wage, overTimeWage, endTime, info) => {
    const temp = [];

    for (i in info) {


        temp.push({
            ...info[i],

            wage: wageCalculatore.updateWages(info[i].startWork,info[i].endWork,wage,overTimeWage)
        })

    }

    return {
        type: SET_UPDATE_NEW_WAGE,
        payLoad: {
            info: temp,
            overTimeWage: overTimeWage,
            endTime: endTime,
            baseWage: wage
        }
    }
}

export const setWage = (wage, overTimeWage, endTime, info) => {
    return {
        type: SET_NEW_WAGE,
        payLoad: {
            info: info,
            overTimeWage: overTimeWage,
            endTime: endTime,
            baseWage: wage
        }
    }

}

export const setEditRescordInfo = (newDate, newWage, newTimeS, newTimeE, info, key) => {
    const span = new Date(newTimeE).getTime() - new Date(newTimeS).getTime()

    const time = {
        Hour: App.msToTime(span).h,
        Minute: App.msToTime(span).m,
        Second: App.msToTime(span).s
    }
    const timeSpan = App.formatTime(time)


    const temp = [];

    for (i in info) {

        if (new Date(key).getTime() === new Date(info[i].startWork).getTime()) {
            temp.push({
                ...info[i],
                endWork: newTimeE,
                startWork: newTimeS,
                wage: parseInt(newWage),
                shiftSpanString: timeSpan,
                createAt: newDate
            })

        }

        else {
            temp.push({
                ...info[i]
            })
        }
    }

//    for(i in temp ){
//        alert (moment(temp[i].createAt).format('jMM/jDD'))
//    }
    return {
        type: EDIT_RECORD,
        payLoad: {
            info: temp

        }
    }
}
export const startEdit = () => {
    return {
        type: START_EDIT

    }
}

export const deleteNote = (keyNote, keyRecord, info) => {
    const temp = [];
    
    for (i in info) {
       
        if (new Date(keyRecord).getTime() === new Date(info[i].startWork).getTime()) {
            temp.push({
                ...info[i],
                note: info[i].note.filter(note=>{
                    return note.key!==keyNote
                })
            })

        }

        else {
            temp.push({
                ...info[i]
            })
        }
    }

    return {
        type:DELETE_NOTE,
        payLoad: {
            info: temp
        }
    }
}

