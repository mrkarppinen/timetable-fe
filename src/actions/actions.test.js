import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_TIMETABLES_START, FETCH_TIMETABLES_DONE, fetchTimetables } from '.';
import sinon from 'sinon';
import TimetableClient from 'timetable-client';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Actions', () => {


    describe('#fetchTimetables()', () => {

        test('should fetch timetables', async () => {

            const mock = sinon.stub(TimetableClient.prototype, 'get');
            mock.returns({title: 'st1', timetable: [], lines: [],id: '1234' });


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