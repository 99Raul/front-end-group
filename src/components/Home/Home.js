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
		login,
		signUp,
		handleLogin,
		handleSignUp,
	} = props;

		const handleAlreadyHaveAccount = () => {
			handleLogin();
			handleSignUp();
		};

	return (
		<>
			{signUp && (
				<div className='modal'>
					<Signup handleSignUp={handleSignUp} handleAlreadyHaveAccount={handleAlreadyHaveAccount} />
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
			<CodeList
				searchString={searchString}
				setSearchString={setSearchString}
				authToken={authToken}
			/>
		</>
	);
}

export default Home;
