// Import React
import React from 'react';
import { shallow } from 'enzyme';
//import { mount } from 'enzyme';

import Home from './Home'

  describe('Counter component', () => {
		let component;
		beforeEach(() => {
			component = shallow(<Home />);
		});

		it('should have a header that says "Home Page"', () => {
			expect(component.contains(<h1>Home Page</h1>)).toBe(true);
		});

	});

	describe('MyComponent', () => {
		it('should render correctly in "debug" mode', () => {
			const component = shallow(<Home debug />);

			expect(component).toMatchSnapshot();
		});
	});