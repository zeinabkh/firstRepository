import { RECORDSHIFTWORK } from "../actions/actionTypes"
import { SELECT_A_MONTH } from '../actions/actionTypes'
import { SORT_SHIFTSPAN, SET_NEW_WAGE, DELETE_NOTE, SET_UPDATE_NEW_WAGE, EDIT_RECORD, START_EDIT, ADD_RECORD } from '../actions/actionTypes'
import { SORT_DATE } from '../actions/actionTypes'
import { SAVE_NOTE } from '../actions/actionTypes'
import { DELETE_ITEM } from '../actions/actionTypes'
import { returnStatement } from "@babel/types";

const initialState = { info: [], filterInfo: [], internalState: 0, traceChange: false, closeEditor: true, baseWage: 40000, overTimeWage: 50000, endTime: new Date().setHours(16, 0, 0) };
const reducerA = (state = initialState, action) => {

    switch (action.type) {
        case RECORDSHIFTWORK:

            return {
                ...state,
                traceChange: !state.traceChange,
                internalState: 1,
                info: action.payLoad.info
            };


            break;
        case SELECT_A_MONTH:

            return {
                ...state,
                internalState: 2,
                traceChange: !state.traceChange,
                filterInfo: action.payLoad.filterInfo
            }

            break;
        case SORT_DATE:
            return {
                ...state,
                internalState: 0,
                traceChange: !state.traceChange,
                info: action.payLoad.info
            }
            break;

        case SORT_SHIFTSPAN:

            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
            }
            break;
        case SAVE_NOTE:

            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
            }
            break;
        case DELETE_ITEM:
            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
            }
        case SET_UPDATE_NEW_WAGE:
            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
                overTimeWage: action.payLoad.overTimeWage,
                baseWage: action.payLoad.baseWage,
                endTime: action.payLoad.endTime
                //closeEditor:false 
            }
            break;

        case EDIT_RECORD:

            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
                closeEditor: false
            }
            break;
        case START_EDIT:
            return {
                ...state,
                traceChange: !state.traceChange,
                closeEditor: true
            }

        case ADD_RECORD:
            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
                //closeEditor:false 
            }
            break;

        case SET_NEW_WAGE:
            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
                overTimeWage: action.payLoad.overTimeWage,
                baseWage: action.payLoad.baseWage,
                endTime: action.payLoad.endTime
                //closeEditor:false 
            }
            break;
        case DELETE_NOTE:
            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange: !state.traceChange,
                overTimeWage: action.payLoad.overTimeWage,
                baseWage: action.payLoad.baseWage,
                endTime: action.payLoad.endTime
                //closeEditor:false 
            }
            break;
        default:
            return state;


    }
}

export default reducerA;