import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {

    test('render is loading', () => {
        const props = {loading: true}
        const component = shallow(<List {...props} />);

        expect(component.find('#loading')).toHaveLength(1);
    });

    test('render list', () => {

        const props = {loading: false, timetables: [{ title: 'title', timetable:[] } ] };
        const component = shallow(<List {...props} />);

        expect(component.find('#loading')).toHaveLength(0);

    });

});