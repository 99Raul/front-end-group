import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../../config';
import './codeInfo.css';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { railscasts }from 'react-syntax-highlighter/dist/esm/styles/hljs'

function CodeInfo(props) {
	const { authToken } = props;
	const [code, setCode] = useState(null);
	const [deleted, setDeleted] = useState(false);
	const [returnCode, setReturn] = useState(false);

	useEffect(() => {
		fetch(`${APIURL}show/${props.codeId}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCode(data);
				setReturn(true);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteCode = (event) => {
		fetch(`${APIURL}${props.codeId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${authToken.token}`,
			},
		}).then(() => {
			setDeleted(true);
		});
	};

	if (deleted) {
		return <Redirect to='/' />;
	}

	if (!returnCode) {
		return <div>Loading...</div>;
	}

	return (
		<div className='code-info-snip'>
			<h1>Code Snippet</h1>
			<h2>{code.title}</h2>
			<CodeBlock
				text={code.body}
				language='javascript'
				theme={atomOneDark}
				wrapLines
			/>
			<SyntaxHighlighter language='javascript' style={railscasts} showLineNumbers={true}>
				{code.body}
			</SyntaxHighlighter>
			<p>{code.description}</p>
			<img className='code-info-image' src={code.img} alt={code.description} />
			<div>
				<Link to={`${code._id}/edit`} className='button'>
					Edit
				</Link>
				<button className='button' onClick={deleteCode}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default CodeInfo;
