import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const slice = createSlice({
	name: 'auth',
	initialState: {
		userId: '',
		name: '',
		token: '',
		email: '',
		address: '',
	},
	reducers: {
		userReceived: (user, action) => {
			const { userId, name, token, email } = action.payload;
			user.userId = userId;
			user.name = name;
			user.token = token;
			user.email = email;
			// user.address = address;
		},
	},
});

export default slice.reducer;

const { userReceived } = slice.actions;

export const getUser = () => (dispatch, getState) => {
	try {
		const jwt = localStorage.getItem('token');
		const decoded = jwtDecode(jwt);
		dispatch(
			userReceived({
				userId: decoded.userId,
				name: decoded.name,
				email: decoded.sub,
				token: jwt,
			})
		);
	} catch (ex) {}
};
