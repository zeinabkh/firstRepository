import {RECORDSHIFTWORK, DELETE_ITEM} from './actionTypes'
import {SELECT_A_MONTH }from './actionTypes'
import {SORT_SHIFTSPAN} from './actionTypes'
import {SORT_DATE} from './actionTypes'
import {SAVE_NOTE} from './actionTypes'
import moment from 'moment-jalaali'
 export const addShiftWork=(newShiftWorkRecord,info)=>{
  //   info.foreach(item=>alert(item.endWork))
  let temp =[ ];
  temp=info.concat({...newShiftWorkRecord})
return {
    type:RECORDSHIFTWORK,
   payLoad:{ info:temp}
}
} ;
export const showMonthinf=(key,info)=>{
    return{
        type:SELECT_A_MONTH,
        payLoad:{
            filterInfo:key === 0 ? info :info.filter(item=>{
                return moment(info.createAt).jMonth()+1===key
            })
        }
    }
}

export const sortByShiftSpan=(info)=>{
  
    return{
        type:SORT_SHIFTSPAN,
        payLoad:{
            info:info.sort(function (a, b) {
                var spanA=new Date (a.endWork)-new Date(a.startWork) ;
                var spanB=new Date(b.endWork)-new Date(b.startWork);
                return spanA - spanB
            })
        }
    }
}

export const sortBydate=(info)=>{
   
    return{
        type:SORT_DATE,
        payLoad:{
            info:info.sort(function (a, b) {

                var dateA = new Date(a.endWork), dateB = new Date(b.endWork)
                return dateA-dateB

            })
        }
    }
}

export const deleteRecord=(info,key)=>{
     alert("inacti")
    return{
        type:DELETE_ITEM,
        payLoad:{
            info:info.filter(item=>{
                return new Date(item.startWork).getTime()!==key
            })
        }    
}
}

export const savenoteInRecord=(note,key,info)=>{
    info.map(item=>{
        if (key===new Date(item.startWork).getTime()){
            item.note=item.note.concat(note)
        }
        })

    return{
        type:SAVE_NOTE,
        payLoad:{
            info:info
        }
    }
}

/*export const editRecord_addNote ;
export const editRecord_setWage ;
export const editRecord_delete ;*/