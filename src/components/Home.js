import React from 'react';
import CodeList from './CodeList/codeList';
import { Link } from 'react-router-dom';

function Home(props) {
	const { searchString, setSearchString } = props;

	return (
		<>
			<Link to='/create'>Create New Code</Link>
			<Link to='/sign'>Sign In</Link>
			<h1>Home Page</h1>
			<CodeList searchString={searchString} setSearchString={setSearchString} />
		</>
	);
}

export default Home;
