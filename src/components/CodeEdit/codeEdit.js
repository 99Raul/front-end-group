import React, { useState, useEffect } from 'react';
import CodeForm from '../CodeForm/codeForm';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config';

function CodeEdit(props) {
	const { codeId, authToken } = props;
	const [code, setCode] = useState(null);
	const [newCode, setNewCode] = useState(null);

	useEffect(() => {
		fetch(`${APIURL}/show/${codeId}`)
			.then((response) => response.json())
			.then((data) => {
				setCode(data);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (event) => {
		event.persist();
		setCode({
			...code,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch(`${APIURL}/${codeId}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${authToken.token}`,
			},
			body: JSON.stringify(code),
		})
			.then((response) => response.json())
			.then((data) => {
				setNewCode(data._id);
			})
			.catch(console.error);
	};

	if (newCode) {
		return <Redirect to={`/code/${newCode}`} />;
	}

	if (!code) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1>Edit Code</h1>
			<CodeForm
				code={code}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}

export default CodeEdit;
