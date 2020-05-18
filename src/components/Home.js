import React from 'react';
import CodeList from './CodeList/codeList';
import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<>
			<Link to='/create'>Create New Code</Link>
			<h1>Home Page</h1>
			<CodeList />
		</>
	);
}

export default Home;
