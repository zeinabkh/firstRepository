import { RECORDSHIFTWORK } from "../actions/actionTypes"
import { SELECT_A_MONTH } from '../actions/actionTypes'
import { SORT_SHIFTSPAN } from '../actions/actionTypes'
import { SORT_DATE } from '../actions/actionTypes'
import {SAVE_NOTE} from '../actions/actionTypes'
import {DELETE_ITEM} from '../actions/actionTypes'
import { returnStatement } from "@babel/types";

const initialState = { info: [], filterInfo: [], internalState: 0 ,traceChange:false};
const reducerA = (state = initialState, action) => {

    switch (action.type) {
        case RECORDSHIFTWORK:
           
            return {
                ...state,
                traceChange:!state.traceChange,
                internalState: 0,
                info:action.payLoad.info
            };


            break;
        case SELECT_A_MONTH:

            return {
                ...state,
                internalState: 1,
                traceChange:!state.traceChange,
                filterInfo:action.payLoad.filterInfo
            }

            break;
        case SORT_DATE:
            return {
                ...state,
                internalState: 0,
                traceChange:!state.traceChange,
                info: action.payLoad.info
            }
            break;

        case SORT_SHIFTSPAN:
           
            return {
                ...state,
                internalState: 0,
                info: action.payLoad.info,
                traceChange:!state.traceChange,
            }
            break;
  case SAVE_NOTE:

        return {
            ...state,
            internalState: 0,
            info: action.payLoad.info,
            traceChange:!state.traceChange,
        }
      break ;
      case DELETE_ITEM:
         return {
            ...state,
            internalState: 0,
            info: action.payLoad.info,
            traceChange:!state.traceChange,
          }
        default:
            return state;


    }
}

export default reducerA;