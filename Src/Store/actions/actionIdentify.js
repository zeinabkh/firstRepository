import RECORDSHIFTWORK from './actionTypes'
 export const addShiftWork=(shiftWorkRecord)=>{
    
return {
    type:RECORDSHIFTWORK,
    shiftSpan:shiftWorkRecord.shiftSpan,
    dateRecord: shiftWorkRecord.dateRecord,
    startWork:shiftWorkRecord.startWork,
    endWork:shiftWorkRecord.endWork,
    shiftSpanString: shiftWorkRecord.shiftSpanString,
    wage: shiftWorkRecord.wage,
    year:shiftWorkRecord.year,
    mount:shiftWorkRecord.mount
}
} ;
export const showmonthinf=(key)=>{
    return{
        type:SELECT_A_MONTH,
        key:key
    }
}
