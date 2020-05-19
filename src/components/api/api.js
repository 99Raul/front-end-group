import axios from 'axios';

const url = 'http://localhost:4000/';



export const searchData = async () => {
	try {
		const { data } = await axios.get(`${url}`);

		return data;
	} catch (error) {}
};