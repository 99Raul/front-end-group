import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './codeInfo.css';

function CodeInfo(props) {
	const [code, setCode] = useState(null);
	const [deleted, setDeleted] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:4000/show/${props.match.params.id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCode(data);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteCode = (event) => {
		fetch(`http://localhost:4000/${props.match.params.id}`, {
			method: 'DELETE',
		}).then(() => {
			setDeleted(true);
		});
	};

	if (deleted) {
		return <Redirect to='/' />;
	}

	if (!code) {
		return <div>Loading...</div>;
	}

	return (
		<div className='code-info-snip'>
			<h1>Code Snippet</h1>
			<h2>{code.title}</h2>
			<p>{code.body}</p>
			<p>{code.description}</p>
			<img className='code-info-image' src={code.img} alt={code.description} />
			<div>
				<Link to={`${code._id}/edit`}>Edit</Link>
				<button onClick={deleteCode}>Delete</button>
			</div>
		</div>
	);
}

export default CodeInfo;
