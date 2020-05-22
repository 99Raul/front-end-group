import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config';
import './Login.css';
// import styles from './Login.module.css'

function Login(props) {
	const { setAuthToken, setNewLogin, newLogin } = props;
	const initialUser = {
		username: '',
		password: '',
	};
	const [userToken, setUserToken] = useState(initialUser);
	const [login, setLogin] = useState(false);
	const [failLogin, setFailLogin] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setUserToken({
			...userToken,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`${APIURL}users/signin`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(userToken),
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				setAuthToken(data);
				setLogin(true);
				setNewLogin(true);
			})
			.catch((err) => {
				console.log(err);
				setFailLogin(true);
			});
	};

	if (login) {

		return <Redirect to='/' />;
	}

	return (
		<>
			<div className='wrapper'>
				<div className='form-wrapper'>
					<button className='close' onClick={props.handleLogin}>
						X
					</button>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className='userName'>
							<label htmlFor='userName'>User Name</label>
							<input
								placeholder='User Name'
								type='text'
								name='username'
								onChange={handleChange}
							/>
						</div>
						<div className='password'>
							<label htmlFor='password'>Password</label>
							<input
								placeholder='Password'
								type='password'
								name='password'
								onChange={handleChange}
							/>
						</div>
						<div className='loginAccount'>
							<button type='submit'>Submit</button>
						</div>
					</form>
					{failLogin && <p className='fail-login'>Login Failed Try Again!</p>}
				</div>
			</div>
		</>
	);
}

export default Login;
