import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../../config';
import './codeInfo.css';
import { CodeBlock, atomOneDark } from 'react-code-blocks';

function CodeInfo(props) {
	const { authToken } = props;
	const [code, setCode] = useState(null);
	const [deleted, setDeleted] = useState(false);
	const [returnCode, setReturn] = useState(false);
	const [user, setUser] = useState('');

	useEffect(() => {
		fetch(`${APIURL}show/${props.codeId}`)
			.then((response) => response.json())
			.then((data) => {
				setCode(data);
				setReturn(true);
			});

		fetch(`${APIURL}users/${authToken.username}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
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

	if (user && user._id === code.author._id) {
		return (
			<div className='code-info-snip'>
				<h1>Code Share</h1>
				<h2>{code.title}</h2>
				<CodeBlock
					text={code.body}
					language='javascript'
					theme={atomOneDark}
					wrapLines
					className='hello'
				/>
				<p>{code.description}</p>
				<img
					className='code-info-image'
					src={code.img}
					alt={code.description}
				/>
				<div className='button-horizontal'>
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

	return (
		<div className='code-info-snip'>
			<h1>Code Share</h1>
			<h2>{code.title}</h2>
			<CodeBlock
				text={code.body}
				language='javascript'
				theme={atomOneDark}
				wrapLines
				className='hello'
			/>
			<p>{code.description}</p>
			<img className='code-info-image' src={code.img} alt={code.description} />
		</div>
	);
}

export default CodeInfo;
