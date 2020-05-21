import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Highlight = () => {
	const codeString = '(num) => num + 1';
	return (
		<SyntaxHighlighter language='javascript' style={dark}>
			{codeString}
		</SyntaxHighlighter>
	);
};

export default Highlight;
