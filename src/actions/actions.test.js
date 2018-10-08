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
            .getOnce('end:/api/line?stop=1234', { body: { timetables: [{title: 'st1'}] }, headers: { 'content-type': 'application/json' } });

            const expectedActions = [
                { type: FETCH_TIMETABLES_START },
                { type: FETCH_TIMETABLES_DONE, timetables: [{title: 'st1'}] }
            ];

            const store = mockStore({timetables: []});

            await store.dispatch(fetchTimetables('1234'));
            expect(store.getActions()).toEqual(expectedActions);


        }); 


    }); 

});