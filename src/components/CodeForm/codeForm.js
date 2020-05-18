import React from 'react';

function codeForm(props) {
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
			<button>Submit</button>
		</form>
	);
}

export default codeForm;
