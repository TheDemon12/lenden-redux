import { combineReducers } from '@reduxjs/toolkit';
import { reducer as burgerMenu } from 'redux-burger-menu';
import newProduct from './newProduct';
import products from './products';
import common from './common';

export default combineReducers({
	burgerMenu,
	newProduct,
	products,
	common,
});
