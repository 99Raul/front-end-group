import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css'
// import styles from './Login.module.css'


function Login(props) {
	const { authToken, setAuthToken } = props;
	const initialUser = {
		username: '',
		password: '',
	};
	const [user, setUser] = useState(initialUser);
	const [login, setLogin] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:4000/users/signin', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setAuthToken(data);
				setLogin(true);
			})
			.catch(console.error);
	};

	if (login) {
		return <Redirect to='/' />;
	}

	return (
		<div className='wrapper'>
			<div className='col'>
				<form onSubmit={handleSubmit}>
					<h1> Please sign In</h1>
					<div className='form-group1'>
						<label htmlFor='username'>Username</label>
						<input
							type='username'
							className='form-control'
							name='username'
							placeholder='Username'
							value={user.username}
							onChange={handleChange}
						/>
					</div>
					<div className='form-group2'>
						<label htmlFor='password'>password</label>
						<input
							type='password'
							className='form-control'
							name='password'
							placeholder='Enter Password'
							value={user.password}
							onChange={handleChange}
						/>
					</div>
					<button type='submit' className='btn'>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
