import React, { useState, useEffect } from 'react';
import CodeForm from '../CodeForm/codeForm';
import { Redirect } from 'react-router-dom';

function CodeEdit(props) {
	const [code, setCode] = useState(null);
	const [codeId, setCodeId] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:4000/${props.match.params.id}`)
			.then((response) => response.json())
			.then((data) => {
				setCode({
					title: data.title,
					description: data.description,
					body: data.body,
				});
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

		fetch(`http://localhost:4000/${props.match.params.id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(code),
		})
			.then((response) => response.json())
			.then((data) => {
				setCodeId(data._id);
			})
			.catch(console.error);
	};

	if (codeId) {
		return <Redirect to={`/${codeId}`} />;
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
