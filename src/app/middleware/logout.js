import { logout } from '../../services/authService';
import { userLoggedOut } from '../auth/login';

const postLogin = store => next => action => {
	if (action.type !== userLoggedOut.type) return next(action);

	logout();
	next(action);
};

export default postLogin;
