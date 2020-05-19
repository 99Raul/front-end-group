import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function NewUser() {
	const [user, setUser] = useState(null);
	const [createdUser, setCreatedUser] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:4000/users/signup', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCreatedUser(true);
			})
			.catch(console.error);
	};

	if (createdUser) {
		return <Redirect to='/signin' />;
	}

	return (
		<div className='wrapper'>
			<div className='form-wrapper'>
				<h1>Create Account</h1>
				<form onSubmit={handleSubmit}>
					<div className='userName'>
						<label htmlFor='userName'>User Name</label>
						<input
							placeholder='User Name'
							type='text'
							name='username'
							noValidate
							onChange={handleChange}
						/>
					</div>
					<div className='email'>
						<label htmlFor='email'>Email</label>
						<input
							placeholder='Email'
							type='email'
							name='email'
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
					<div className='createAccount'>
						<button type='submit'>Create Account</button>
						<small>Already Have an Account?</small>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewUser;
