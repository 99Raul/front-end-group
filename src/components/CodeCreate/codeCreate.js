import React, { useState } from 'react';
import CodeForm from '../CodeForm/codeForm';
import { Redirect } from 'react-router-dom';

function CreateCode(props) {
	const initialCode = {
		title: '',
		body: '',
		description: '',
		img: '',
	};
	const { authToken } = props;
	const [code, setCode] = useState(initialCode);
	const [newCodeId, setNewCodeId] = useState(null);
	console.log(authToken.token);

	const handleChange = (event) => {
		event.persist();
		setCode({
			...code,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch('http://localhost:4000/', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${authToken.token}`,
			},
			body: JSON.stringify(code),
		})
			.then((response) => response.json())
			.then((data) => {
				setNewCodeId(data._id);
			})
			.catch(console.error);
	};

	if (newCodeId) {
		return <Redirect to={`/code/${newCodeId}`} />;
	}

	return (
		<>
			<h1>Create a new code snippet</h1>
			<CodeForm
				code={code}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}

export default CreateCode;
