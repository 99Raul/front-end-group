import React from 'react';

function Sign(props) {
	return (
		<form >
			<label htmlFor='title'>Title</label>
			<input
				type='text'
				placeholder='Code Title'
				
				required
				id='title'
				name='title'
			/>

			<label htmlFor='body'>Code</label>
			<input
				type='text'
				name='body'
				id='body'
			/>
		</form>
	);
}

export default Sign;
