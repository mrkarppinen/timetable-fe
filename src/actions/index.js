import {loadTimetable} from '../services/timetable-service';

export const FETCH_TIMETABLES_START = "feth_timetables_start";
export const FETCH_TIMETABLES = "fetch_timetables";
export const FETCH_TIMETABLES_DONE = "fetch_timetables_done";
export const FETCH_ONE_START = "fetch_one_start";



const startFetchingTimetables = () => {
    return {
        type: FETCH_TIMETABLES_START
    };
};

const startFetchingOne = () => {
    return {
        type: FETCH_ONE_START
    };
};

const fetchingTimetablesDone = (timetables = []) => {
    return {
        type: FETCH_TIMETABLES_DONE,
        timetables
    };
}

export const fetchTimetables = (ids) => {
    return dispatch => {
        dispatch(startFetchingTimetables());
        return loadTimetable(ids)
        .then( data => {
            dispatch(fetchingTimetablesDone(data.timetables));
        })
        .catch( err => {
            console.error(err);
            dispatch(fetchingTimetablesDone());
        });
    };
};

export const fetchOneTimetable = (id) => {
    return dispatch => {
        dispatch(startFetchingOne());
        return loadTimetable(id)
        .then( data => {
            dispatch(fetchingTimetablesDone(data.timetables));
        })
        .catch( err => {
            console.error(err);
            dispatch(fetchingTimetablesDone());
        });
    };
};