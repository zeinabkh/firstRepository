import {RECORDSHIFTWORK} from './actionTypes'
import {SELECT_A_MONTH }from './actionTypes'
import {SORT_SHIFTSPAN} from './actionTypes'
import {SORT_DATE} from './actionTypes'
 export const addShiftWork=(shiftWorkRecord)=>{
    
return {
    type:RECORDSHIFTWORK,
   /* shiftSpan:shiftWorkRecord.shiftSpan,
    dateRecord: shiftWorkRecord.dateRecord,
    startWork:shiftWorkRecord.startWork,
    endWork:shiftWorkRecord.endWork,
    shiftSpanString: shiftWorkRecord.shiftSpanString,
    wage: shiftWorkRecord.wage,
    year:shiftWorkRecord.year,
    month:shiftWorkRecord.month,
    visible:shiftWorkRecord.visible*/
    ...shiftWorkRecord
}
} ;
export const showMonthinf=(key)=>{
    return{
        type:SELECT_A_MONTH,
        key:key
    }
}

export const sortByShiftSpan=()=>{
    return{
        type:SORT_SHIFTSPAN
    }
}

export const sortBydate=()=>{
    return{
        type:SORT_DATE
    }
}