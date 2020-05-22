import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../../config';
import './codeList.css';

function CodeList(props) {
	const [codes, setCode] = useState([]);
	const [error, setError] = useState(false);
	const { searchString, authToken } = props;
	const [user, setUser] = useState();

	useEffect(() => {
		fetch(APIURL)
			.then((response) => response.json())
			.then((data) => {
				setCode(data);
			})
			.catch(() => {
				setError(true);
			});

		fetch(`${APIURL}users/${authToken.username}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
				console.log(authToken);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authToken.username]);

	let filteredCodes = codes.filter((code) => {
		return code.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
	});

	if (error) {
		return <div>There was an error retrieving the code</div>;
	}
	console.log(user);
	return (
		<div className='box'>
			{filteredCodes.map((code) => (
				<Link to={`/code/${code._id}`} key={code._id}>
					{user ? (
						<div
							className={
								code.author._id === user._id ? 'user-card' : 'code-card'
							}>
							<h2>{code.title}</h2>
							<img className='code-card-img' src={code.img} alt={code.title} />
							<h3>Created by: {code.author.email}</h3>
						</div>
					) : (
						<div className='code-card'>
							<h2>{code.title}</h2>
							<img className='code-card-img' src={code.img} alt={code.title} />
							<h3>Created by: {code.author.email}</h3>
						</div>
					)}
				</Link>
			))}
		</div>
	);
}

export default CodeList;
