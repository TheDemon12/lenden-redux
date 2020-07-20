import http from './httpService';
// import { api } from '../config.json';
import jwtDecode from 'jwt-decode';

// const apiEndPoint = `${api}/users/login`;
const tokenKey = 'token';
http.setToken(getToken());

// export async function login({ email, password }) {
// 	const { headers } = await http.post(apiEndPoint, {
// 		email,
// 		password,
// 	});
// 	localStorage.setItem(tokenKey, headers['authorization']);
// }
console.log('eh');
export function logout() {
	localStorage.removeItem(tokenKey);
	window.location = '/';
}

export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem(tokenKey);
		return jwtDecode(jwt);
	} catch (ex) {
		return null;
	}
}

export function setToken(token) {
	localStorage.setItem(tokenKey, token);
}

export function getToken() {
	return localStorage.getItem(tokenKey);
}
