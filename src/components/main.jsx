import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import ProtectedRoute from './common/protectedRoute';
import MainNav from './navBar/mainNav';
import SideNav from './navBar/sideNav';
import NotFound from './common/notFound';
import NewProduct from './newProduct/newProduct';

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
			<Switch>
				<Route path='/not-found' component={NotFound} />
				<ProtectedRoute path='/new' exact component={NewProduct} />
				<Redirect to='/not-found' />
			</Switch>
		</React.Fragment>
	);
};

export default Main;
