import React from 'react';
import { shallow } from 'enzyme';
import {NavigationTab} from "../NavigationTab";

describe('<NavigationTab />', () => {
    it('should match the snapshot', () => {
        const component = shallow(<NavigationTab text={'example'}/>);
        expect(component).toMatchSnapshot();
    });
});
