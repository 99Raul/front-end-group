import React, { useState } from 'react';
import CodeList from '../CodeList/codeList';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
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

	const [newLogin, setNewLogin] = useState(false);

	const handleAlreadyHaveAccount = () => {
		handleLogin();
		handleSignUp();
	};

	const handleCloseWindow = () => {
		setNewLogin(false);
	};

	return (
		<>
			{login ? (
				<p>Click the menu to create code</p>
			) : (
				<p>Click the menu to log in</p>
			)}
			{signUp && (
				<div className='modal'>
					<Signup
						handleSignUp={handleSignUp}
						handleAlreadyHaveAccount={handleAlreadyHaveAccount}
						handleLogin={handleLogin}
					/>
				</div>
			)}
			{login && (
				<div className='modal'>
					<Login
						handleLogin={handleLogin}
						authToken={authToken}
						setAuthToken={setAuthToken}
						setNewLogin={setNewLogin}
						newLogin={newLogin}
					/>
				</div>
			)}
			{newLogin && (
				<div className='modal'>
					<div className='wrapper'>
						<div className='logged-in'>
							<button className='close' onClick={handleCloseWindow}>
								X
							</button>
							<h1>Signed in as</h1>
							<h1>{authToken.username}</h1>
						</div>
					</div>
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
