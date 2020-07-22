import { combineReducers } from '@reduxjs/toolkit';
import { reducer as burgerMenu } from 'redux-burger-menu';
import newProduct from './newProduct';
export default combineReducers({
	burgerMenu,
	newProduct,
});
