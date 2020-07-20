import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import apiMiddleware from './middleware/apiMiddleware';

export default configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), apiMiddleware],
});
