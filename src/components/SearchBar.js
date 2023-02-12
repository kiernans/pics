import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(searchTerm);
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className='search-bar'>
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input value={searchTerm} onChange={handleChange} />
			</form>
		</div>
	);
};

export default SearchBar;
