import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_TIMETABLES_START, FETCH_TIMETABLES_DONE, fetchTimetables } from '.';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Actions', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    describe('#fetchTimetables()', () => {

        test('should fetch timetables', async () => {

            fetchMock
            .postOnce('*', { body: { data: {stops: [{name: 'st1', 'stoptimesForServiceDate': [] }]}}, headers: { 'content-type': 'application/json' } });

            const expectedActions = [
                { type: FETCH_TIMETABLES_START },
                { type: FETCH_TIMETABLES_DONE, timetables: [{title: 'st1', id: '1234', lines: [], timetable: []}] }
            ];

            const store = mockStore({timetables: []});

            await store.dispatch(fetchTimetables('1234'));
            expect(store.getActions()).toEqual(expectedActions);


        }); 


    }); 

});