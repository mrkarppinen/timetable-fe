import React from 'React';
import {shallow} from 'enzyme';
import {ListItem} from './ListItem';
describe('ListItem', () => {

    test('render item correctly', () => {
        const item = {title: 'Title', id: '1234'};
        const component = shallow(<ListItem {...item}  />);

        expect(component.find('.list-item')).toHaveLength(1);
        expect(component.find('h2').text()).toEqual('Title (1234)');
    });

});
