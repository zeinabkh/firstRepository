import RECORDSHIFTWORK from "../actions/actionTypes"
import SELECT_A_MONTH from './actions/actionTypes'
const reducerA = (state = [], action) => {

    switch (action.type) {
        case RECORDSHIFTWORK:

            return state = [{
                month: action.month,
                year: action.year,
                shiftSpan: action.shiftSpan,
                dateRecord: action.dateRecord,
                startWork: action.startWork,
                endWork: action.endWork,
                shiftSpanString: action.shiftSpanString,
                wage: action.wage

            }, ...state];

            break;
        case SELECT_A_MONTH:
            return state = state.filter(() => {
                return state.month === action.key
            })
            break;

    }
}

export default reducerA;