import React from 'react';
import { shallow } from 'enzyme';
//import { mount } from 'enzyme';

import codeCreate from './codeCreate';

describe('codeCreate', () => {
	it('renders', () => {
		shallow(<codeCreate />);
	});
});
