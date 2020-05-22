import React, { useState } from 'react';
import Home from './components/Home/Home';
import CodeCreate from './components/CodeCreate/codeCreate';
import Navbar from './components/Navbar/Navbar';
import CodeInfo from './components/CodeInfo/codeInfo';
import CodeEdit from './components/CodeEdit/codeEdit';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [searchString, setSearchString] = useState('');
	const [authToken, setAuthToken] = useState('');

	const [login, setLogin] = useState(false);
	const [signUp, setSignUp] = useState(false);

	const handleLogin = () => {
		setLogin(!login);
	};

	const handleSignUp = () => {
		setSignUp(!signUp);
	};

	const handleSignOut = () => {
		setAuthToken('');
	};

	return (
		<div className='main'>
			<Route
				path='*'
				render={() => {
					return (
						<Navbar
							searchString={searchString}
							setSearchString={setSearchString}
							authToken={authToken}
							handleLogin={handleLogin}
							handleSignUp={handleSignUp}
							handleSignOut={handleSignOut}
						/>
					);
				}}
			/>
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return (
							<Home
								searchString={searchString}
								setSearchString={setSearchString}
								authToken={authToken}
								setAuthToken={setAuthToken}
								login={login}
								handleLogin={handleLogin}
								signUp={signUp}
								handleSignUp={handleSignUp}
							/>
						);
					}}
				/>
				<Route
					path='/create'
					render={() => {
						return <CodeCreate authToken={authToken} />;
					}}
				/>
				<Route
					exact
					path='/code/:id'
					render={(routerProps) => {
						return (
							<CodeInfo
								codeId={routerProps.match.params.id}
								authToken={authToken}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/code/:id/edit'
					render={(routerProps) => {
						return (
							<CodeEdit
								codeId={routerProps.match.params.id}
								authToken={authToken}
							/>
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
