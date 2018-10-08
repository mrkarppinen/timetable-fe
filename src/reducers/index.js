import { FETCH_TIMETABLES_START, FETCH_TIMETABLES_DONE, FETCH_ONE_START } from '../actions';
import { combineReducers } from 'redux';

const timetable = (state = {loading: false, list: [], loadingOne: false}, action) => {
    switch(action.type) {
        case FETCH_TIMETABLES_START:
            return {loading: true, list: [], loadingOne: false};
        case FETCH_TIMETABLES_DONE:
            return { loading: false, list: state.list.concat(action.timetables), loadingOne: false };
        case FETCH_ONE_START: 
            return { ...state, loadingOne: true }            
        default:
            return state;
    };
};

const rootReducer = combineReducers({timetable});
export default rootReducer;