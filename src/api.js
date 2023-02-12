import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID 6ac_lAWxZ9WtbJjm9rRPmVROpBb0v3SFOczwBYPOW_g',
		},
		params: {
			query: term,
		},
	});
	console.log(response.data.results);
	return response.data.results;
};

export default searchImages;
