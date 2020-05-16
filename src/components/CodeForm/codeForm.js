import React from 'react';

function codeForm() {
	return (
		<form>
			<label htmlFor='title'>Title</label>
			<input
				type='text'
				placeholder='Code Title'
				required
				id='title'
				name='title'
			/>
			<label htmlFor='description'>Description</label>
			<input
				type='text'
				placeholder='Code Description'
				name='description'
				id='description'
			/>
			<button>Submit</button>
		</form>
	);
}

export default codeForm;
