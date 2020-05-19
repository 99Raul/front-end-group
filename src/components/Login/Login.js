import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onChange = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();

		// const User = {
		// 	email: this.state.email,
		// 	password: this.state.password,
        // };
        
        
		// Login(user).then(res => {

		// })
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<form onSubmit={this.onSubmit}>
							<h1> Please sign In</h1>
							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									className='form-control'
									name='email'
									placeholder='Enter Email'
									value={this.state.email}
									onChange={this.onChange}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='password'>password</label>
								<input
									type='password'
									className='form-control'
									name='password'
									placeholder='Enter Password'
									value={this.state.password}
									onChange={this.onChange}
								/>
							</div>
							<button type='submit' className='btn'>
								Sign In
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
