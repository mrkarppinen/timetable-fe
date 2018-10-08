import React from 'react';
import {shallow} from 'enzyme';
import Time from './Time';

describe('Time', () => {

    test('render correct time ', () =>{
        const time = shallow(<Time value={20340} />);
        expect(time.text()).toBe('05:39');
    });


});