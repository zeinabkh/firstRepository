import { RECORDSHIFTWORK } from "../actions/actionTypes"
import { SELECT_A_MONTH } from '../actions/actionTypes'
import { SORT_SHIFTSPAN } from '../actions/actionTypes'
import { SORT_DATE } from '../actions/actionTypes'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import creatTransform from 'redux-persist'
import { returnStatement } from "@babel/types";
const initialState = { info: [], filterInfo: [], internalState: 0 };
const reducerA = (state = initialState, action) => {

    switch (action.type) {
        case RECORDSHIFTWORK:

            return {
                ...state,
                internalState: 0,
                info: state.info.concat({
                    month: action.month,
                    year: action.year,
                    shiftSpan: action.shiftSpan,
                    dateRecord: action.dateRecord,
                    startWork: action.startWork,
                    endWork: action.endWork,
                    shiftSpanString: action.shiftSpanString,
                    wage: action.wage,
                    visible: action.visible,
                    date: action.date

                }), filterInfo: state.info.concat({
                    month: action.month,
                    year: action.year,
                    shiftSpan: action.shiftSpan,
                    dateRecord: action.dateRecord,
                    startWork: action.startWork,
                    endWork: action.endWork,
                    shiftSpanString: action.shiftSpanString,
                    wage: action.wage,
                    visible: action.visible,
                    date: action.date
                })
            };


            break;
        case SELECT_A_MONTH:

            return {
                ...state,
                internalState: 1,

                filterInfo: action.key === 0 ? state.info : state.info.filter(item => {

                    return item.month + 1 === action.key
                })
            }

            break;
        case SORT_DATE:
            return {
                ...state,
                internalState: 1,
                filterInfo: state.info.sort(function (a, b) {

                    var dateA = a.dateRecord, dateB = b.dateRecord
                    return dateA - dateB

                })
            }
            break;

        case SORT_SHIFTSPAN:
            alert(state.info[0].shiftSpan)
            return {
                ...state,
                internalState: 0,
                info: state.info.sort(function (a, b) {
                    return a.shiftSpan - b.shiftSpan
                })
            }
            break;

        default:
            return state;


    }
}

const persistConfig = {
    key: 'logs',
    storage: storage,
    whitelist: ['state']
};

const reducer = persistReducer(persistConfig, reducerA);
export default reducerA;