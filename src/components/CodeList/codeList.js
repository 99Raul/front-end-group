import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './codeList.css';

function CodeList(props) {
	const [codes, setCode] = useState([]);
	const [filterCodes, setFilterCodes] = useState(null);
	const [error, setError] = useState(false);
	const { searchString, setSearchString } = props;

	useEffect(() => {
		fetch(`http://localhost:4000/`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCode(data);
			})
			.catch(() => {
				setError(true);
			});
	}, []);

	if (error) {
		return <div>There was an error retrieving the code</div>;
	}

	return (
		<div>
			{codes.map((code) => (
				<div className='code-card' key={code._id}>
					<Link to={`/code/${code._id}`}>
						<h2>{code.title}</h2>
						<img className='code-card-img' src={code.img} alt={code.title} />
					</Link>
				</div>
			))}
		</div>
	);
}

export default CodeList;
