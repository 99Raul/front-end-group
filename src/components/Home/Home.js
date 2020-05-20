import React, { useState } from 'react';
import CodeList from '../CodeList/codeList';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
	const { searchString, setSearchString, authToken } = props;
	console.log(authToken);

	return (
		<>
			<div className='link-container'>

			{authToken === null && <div className='link1'>
				<Link to='/signup'>Sign Up</Link>
			</div>}
			<div className='link2'>
				<Link to='/create'>Create New Code</Link>
			</div>
			{authToken === null && <div className='link3'>
				<Link to='/login'>Login</Link>
			</div>}
			</div>
			<h1>Home Page</h1>
			<CodeList searchString={searchString} setSearchString={setSearchString} />
		</>
	);
}

export default Home;
