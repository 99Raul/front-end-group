import React, { useState, useEffect } from 'react';
import CodeForm from '../CodeForm/codeForm';

function CodeEdit(props) {
	const [code, setCode] = useState(null);
    const [codeId, setCodeId] = useState(null);
    console.log(props.match.params.id)

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
	});

	return (
		<>
			<h1>Edit Code</h1>
			<CodeForm />
		</>
	);
}

export default CodeEdit;
