import React, { useState } from 'react';
import CodeForm from '../CodeForm/codeForm';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config';

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
	const [notLoggedIn, setNotLoggedIn] = useState(false);
	const [containsImage, setContainsImage] = useState('');

	const handleChange = (event) => {
		event.persist();
		setCode({
			...code,
			[event.target.name]: event.target.value,
		});

		if (event.target.name === 'img') {
			setContainsImage(event.target.value);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		if (authToken !== '') {
			fetch(APIURL, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${authToken.token}`,
				},
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					setNewCodeId(data._id);
				})
				.catch();
		} else {
			setNotLoggedIn(true);
		}
	};

	if (newCodeId) {
		return <Redirect to={`/code/${newCodeId}`} />;
	}

	return (
		<>
			<h1>Create A New Code Share</h1>
			<CodeForm
				code={code}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				notLoggedIn={notLoggedIn}
				containsImage={containsImage}
			/>
		</>
	);
}

export default CreateCode;
