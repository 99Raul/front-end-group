import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../../config';
import './codeList.css';

function CodeList(props) {
	const [codes, setCode] = useState([]);
	const [filterCodes, setFilterCodes] = useState(null);
	const [error, setError] = useState(false);
	const { searchString, setSearchString } = props;

	useEffect(() => {
		fetch(APIURL)
			.then((response) => response.json())
			.then((data) => {
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
		<div className='box'>
			{codes.map((code) => (
				<Link to={`/code/${code._id}`} key={code._id}>
					<div className='code-card'>
						<h2>{code.title}</h2>
						<img className='code-card-img' src={code.img} alt={code.title} />
					</div>
				</Link>
			))}
		</div>
	);
}

export default CodeList;
