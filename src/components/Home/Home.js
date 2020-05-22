import React, { useState } from 'react';
import CodeList from '../CodeList/codeList';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
	const {
		searchString,
		setSearchString,
		authToken,
		setAuthToken,
		user,
		setUser,
	} = props;
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
				{authToken !== '' && <h1>{authToken.username}</h1>}
				{authToken === '' && (
					<button className='link' onClick={handleLogin}>
						Login
					</button>
				)}
				{authToken === '' && (
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
						user={user}
						setUser={setUser}
					/>
				</div>
			)}
			<h1>Home Page</h1>
			<CodeList
				searchString={searchString}
				setSearchString={setSearchString}
				authToken={authToken}
			/>
		</>
	);
}

export default Home;
