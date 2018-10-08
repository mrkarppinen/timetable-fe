import React from 'react';
import {shallow} from 'enzyme';
import Storage from '../lib/storage';
import {Root} from './Root';
import sinon from 'sinon';



describe('Root', () => {

    test('render root', () => {

        var stub = sinon.stub(Storage.prototype, "getStops");
        stub.returns('1234');

        const onMount = jest.fn();
        const props = { onMount };
        const component = shallow(<Root {...props} />);

        expect(onMount.mock.calls.length).toBe(1);

    });

});