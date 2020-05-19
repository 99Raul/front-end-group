import React from 'react';

function codeForm(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		fetch('http://localhost:4000/users', {
			method: 'POST',
			body: formData,
		})
		.then((response) => response.json()).then((result) => {
			console.log('Success: ', result)
		})
		.catch((error) => {
			console.error('Error', error)
		})
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<label htmlFor='title'>Title</label>
			<input
				type='text'
				placeholder='Code Title'
				value={props.code.title}
				onChange={props.handleChange}
				required
				id='title'
				name='title'
			/>

			<label htmlFor='body'>Code</label>
			<input
				type='text'
				value={props.code.body}
				onChange={props.handleChange}
				placeholder='Code'
				name='body'
				id='body'
			/>

			<label htmlFor='description'>Description</label>
			<input
				type='text'
				value={props.code.description}
				onChange={props.handleChange}
				placeholder='Code Description'
				name='description'
				id='description'
			/>

			{/* <label htmlFor='image'>Image</label>
			<input
				type='text'
				value={props.code.img}
				onChange={props.handleChange}
				placeholder='Code image'
				name='img'
				id='img'
			/> */}

			<form encType='multipart/form-data' onSubmit={handleSubmit}>
				<label htmlFor='username'>Username:</label>
				<input id='username' name='username' type='text' />
				<input type='file' id='avatar' name='avatar' />
				<button type='submit'>Send it</button>
			</form>

			<button>Submit</button>
		</form>
	);
}

export default codeForm;
