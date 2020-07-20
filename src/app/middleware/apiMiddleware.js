import http from '../../services/httpService';

import { setToken } from '../../services/authService'; //TODO

import { api } from '../../config.json';
import { apiCallBegan, apiCallFailed, apiCallSuccess } from '../api';

const apiMiddleware = ({ dispatch, getState }) => next => async action => {
	if (action.type !== apiCallBegan.type) return next(action);

	const {
		method = 'get',
		url,
		data,
		onSuccess,
		onError,
		onStart,
	} = action.payload;

	if (onStart) dispatch({ type: onStart });
	next(action);

	try {
		const res = await http[method](`${api}/${url}`, data);
		dispatch(apiCallSuccess(res.data));
		if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
	} catch (ex) {
		dispatch(apiCallFailed(ex.message));
		if (onError) dispatch({ type: onError, payload: ex.message });
	}
};

export default apiMiddleware;
