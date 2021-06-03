import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import {shallow} from 'enzyme';

test('should render DashboardPage correctly', () => {
    const warpper = shallow(<DashboardPage/>);
    expect(warpper).toMatchSnapshot();
});