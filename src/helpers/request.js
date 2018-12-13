import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api';

export async function request(path, method = 'get', body = null) {
	let bearerToken = '';
	const token = await localStorage.getItem('groCityToken');
	if (token) bearerToken = `Bearer: ${ token }`;
	return axios({
		method: method,
		url: `${ BASE_URL }${ path }`,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': bearerToken
		},
		data: body
	});
};