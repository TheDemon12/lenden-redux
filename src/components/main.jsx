import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import { getUser, getAddress } from '../app/auth/user';

const Main = () => {
	return (
		<React.Fragment>
			<SideNav
			// onUserClick={this.handleUserClick}
			// onSwipeLeft={this.handleSwipeLeft}
			// user={user}
			/>
			<MainNav
			// onUserClick={this.handleUserClick}
			// user={user}
			/>
		</React.Fragment>
	);
};

export default Main;
