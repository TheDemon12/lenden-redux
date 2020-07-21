import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import login from './login';

export default combineReducers({
	user,
	login,
});
