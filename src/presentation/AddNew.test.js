import React from 'react';
import { shallow } from 'enzyme';
import AddNew from './AddNew';

describe('AddNew', () => {

    test('Toggle form', () => {
        const onAdd = jest.fn();
        const component = shallow(<AddNew onAdd={onAdd}/>);

        expect(component.find('#add-form')).toHaveLength(0);
        component.find('#open-form').simulate('click');
        expect(component.find('StopForm')).toHaveLength(1);

        component.find('#close-form').simulate('click');
        expect(component.find('StopForm')).toHaveLength(0);


    });

    test('submit form', () => {
        const onAdd = jest.fn();
        const component = shallow(<AddNew onAdd={onAdd} />);

        component.find('#open-form').simulate('click');
        component.find('StopForm').dive().find('#add-form').simulate('submit', {target:{stopId: {value: 'submitted...'}}, preventDefault: () => {}});

        expect(onAdd.mock.calls.length).toBe(1);
        expect(onAdd.mock.calls[0][0]).toBe('submitted...');

    });


});