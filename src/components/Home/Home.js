import React, { useState } from 'react';
import CodeList from '../CodeList/codeList';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
	const { searchString, setSearchString, authToken } = props;
	const [login, setLogin] = useState(false);
	const [signUp, setSignUp] = useState(false);

	const handleLogin = () => {
		setLogin(!login);
		console.log(login);
	};

	const handleSignUp = () => {
		setSignUp(!signUp);
		console.log(signUp);
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
					<div className='link'>
						<Link to='/login'>Login</Link>
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
					<Login handleLogin={handleLogin} />
				</div>
			)}
			<h1>Home Page</h1>
			<CodeList searchString={searchString} setSearchString={setSearchString} />
		</>
	);
}

export default Home;
