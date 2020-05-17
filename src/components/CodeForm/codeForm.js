import React from 'react';

function codeForm() {
	return (
		<form>
			<div>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					placeholder='Code Title'
					required
					id='title'
					name='title'
				/>
			</div>
			<div>
				<label htmlFor='code'>Code</label>
				<input type='text' placeholder='Code' name='code' id='code' />
			</div>
			<div>
				<label htmlFor='description'>Description</label>
				<input
					type='text'
					placeholder='Code Description'
					name='description'
					id='description'
				/>
			</div>
			<button>Submit</button>
		</form>
	);
}

export default codeForm;
