import React from 'react';
import { shallow } from 'enzyme';
//import { mount } from 'enzyme';
import CodeList from './codeList';

describe('codeList', () => {
	it('renders', () => {
		shallow(<codeList />);
	});
});

describe('MyComponent', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<CodeList debug />);

		expect(component).toMatchSnapshot();
	});
});
