import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import codeForm from './codeForm'


describe('MyComponent', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<codeForm debug />);

		expect(component).toMatchSnapshot();
	});
});


describe('codeForm', () => {
	it('renders', () => {
		shallow(<codeForm />);
	});
});