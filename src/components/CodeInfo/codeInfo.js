import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

function CodeInfo(props) {
	const [code, setCode] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:4000/${props.match.params.id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCode(data);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!code) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1>Code Snippet</h1>
			<h2>{code.title}</h2>
			<p>{code.body}</p>
			<p>{code.description}</p>
		</>
	);
}

export default CodeInfo;
