import React, { useState } from 'react';
import CodeList from '../CodeList/codeList';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
	const { searchString, setSearchString, authToken, setAuthToken } = props;
	const [login, setLogin] = useState(false);
	const [signUp, setSignUp] = useState(false);

	const handleLogin = () => {
		setLogin(!login);
	};

	const handleSignUp = () => {
		setSignUp(!signUp);
	};

	return (
		<>
			<div className='link-container'>
				{authToken !== null && (
					<div className='link'>
						<Link to='/create'>Create New Code</Link>
					</div>
				)}
				{authToken === null && (
					<button className='link' onClick={handleLogin}>
						Login
					</button>
				)}
				{authToken === null && (
					<button className='link' onClick={handleSignUp}>
						Sign Up
					</button>
				)}
			</div>
			{signUp && (
				<div className='modal'>
					<Signup handleSignUp={handleSignUp} />
				</div>
			)}
			{login && (
				<div className='modal'>
					<Login
						handleLogin={handleLogin}
						authToken={authToken}
						setAuthToken={setAuthToken}
					/>
				</div>
			)}
			<h1>Home Page</h1>
			<CodeList searchString={searchString} setSearchString={setSearchString} />
		</>
	);
}

export default Home;
