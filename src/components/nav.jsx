import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { action as toggleMenu } from 'redux-burger-menu';
// import { stateChanged } from '../app/nav';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const dispatch = useDispatch();
	const nav = useSelector(state => state.burgerMenu);
	let styles = {
		bmBurgerButton: {
			position: 'fixed',
			width: '36px',
			height: '30px',
			left: '36px',
			top: '36px',
		},
		bmBurgerBars: {
			background: '#373a47',
		},
		bmBurgerBarsHover: {
			background: '#a90000',
		},
		bmCrossButton: {
			height: '24px',
			width: '24px',
		},
		bmCross: {
			background: '#bdc3c7',
		},
		bmMenuWrap: {
			position: 'fixed',
			height: '100%',
		},
		bmMenu: {
			background: '#373a47',
			padding: '2.5em 1.5em 0',
			fontSize: '1.15em',
		},
		bmMorphShape: {
			fill: '#373a47',
		},
		bmItemList: {
			color: '#b8b7ad',
			padding: '0.8em',
		},
		bmItem: {
			display: 'inline-block',
		},
		bmOverlay: {
			background: 'rgba(0, 0, 0, 0.3)',
		},
	};

	return (
		<Menu
			// customBurgerIcon={false}
			isOpen={nav.isOpen}
			// styles={styles}
			onStateChange={state => dispatch(toggleMenu(state.isOpen))}>
			{/* <Image
					id='userImageMain'
					src={
						user ? 'https://placekitten.com/g/300/300' : '/images/genericUser.png'
					}
					roundedCircle
					onClick={onUserClick}
				/> */}
			{/* {!user && (
					<NavLink
						id='navAnchor'
						to='/login'
						className='menu-item'
						>
						Sign In
					</NavLink>
				)}
				{user && (
					<NavLink
						id='navAnchor'
						to='/me'
						className='menu-item'
						>
						My Account
					</NavLink>
				)} */}

			<NavLink to='/notifications' className='menu-item'>
				Notifications
				{/* <FontAwesomeIcon id='sideNavBell' icon={faBell} /> */}
			</NavLink>
			<NavLink to='/wishlist' className='menu-item'>
				Wishlist
			</NavLink>
			<NavLink to='/my-products' className='menu-item'>
				My Products
			</NavLink>
			<NavLink id='homeAnchor' to='/' exact className='menu-item'>
				Home
			</NavLink>
			<NavLink to='/books' className='menu-item'>
				Books
			</NavLink>
			<NavLink to='/gaming' className='menu-item'>
				Gaming
			</NavLink>
			<NavLink to='/mobiles' className='menu-item'>
				Mobiles
			</NavLink>
			<NavLink to='/blog' className='menu-item'>
				Blog
			</NavLink>
			<NavLink to='/contact' className='menu-item'>
				Contact Us
			</NavLink>
			<NavLink to='/about' className='menu-item'>
				About Us
			</NavLink>
			{/*
				{user && (
					<div id='signOutNav' onClick={authService.logout}>
						SIGN OUT
					</div>
				)} */}
		</Menu>
	);
	// return <div>Hello</div>;
};

export default NavBar;
