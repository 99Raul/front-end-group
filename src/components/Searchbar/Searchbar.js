import React, { useState, useEffect } from 'react';
import './Searchbar.css';
function SearchBar(props) {
	const [searchString, setSearchString] = useState('');
	const { allCodesSnippet } = props;
	console.log(allCodesSnippet);
	const handleChange = (event) => {
		event.persist();
		setSearchString(event.target.value);
	};

	useEffect(() => {

		//  allCodesSnippet.filter((code) => console.log(code) )
		
	}, [searchString]);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				type='text'
				name='searchString'
				required
				placeholder='Search for Images'
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit' className='submit'>
				Submit
			</button>
		</form>
	);
}
export default SearchBar;
