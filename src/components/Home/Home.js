import React, { useState } from 'react';
import CodeList from '../CodeList/codeList';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
	const { searchString, setSearchString, authToken } = props;

	return (
		<>
			<div className='link-container'>

			<div className='link1'>
				<Link to='/signup'>Sign Up</Link>
			</div>
			<div className='link2'>
				<Link to='/create'>Create New Code</Link>
			</div>
			<div className='link3'>
				<Link to='/login'>Login</Link>
			</div>
			</div>
			{authToken !== null && <p>{authToken.user}</p>}
			<h1>Home Page</h1>
			<CodeList searchString={searchString} setSearchString={setSearchString} />
		</>
	);
}

export default Home;
