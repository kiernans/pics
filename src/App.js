import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

const App = () => {
	const [images, setImages] = useState([]);

	const onSubmit = async (term) => {
		const result = await searchImages(term);
		setImages(result);
	};

	return (
		<div>
			<SearchBar onSubmit={onSubmit} />
			<ImageList images={images} />
		</div>
	);
};

export default App;
