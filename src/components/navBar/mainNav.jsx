import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action as toggleMenu } from 'redux-burger-menu';
import { withRouter, NavLink } from 'react-router-dom';
import { Navbar, Nav, Image, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';
import {
	faBars,
	faHeart,
	faBell,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';

const MainNav = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	return (
		<div className='mainNavBarGroup'>
			<Navbar variant='dark' className='mainNav'>
				<Navbar.Brand
					onClick={() => dispatch(toggleMenu(true))}
					style={{ cursor: 'pointer' }}>
					<FontAwesomeIcon icon={faBars} />
				</Navbar.Brand>
				<Image
					onClick={() => props.history.push('/')}
					id='logo'
					src='/images/navLogo.png'
				/>

				<Nav.Link className='category'>
					<NavLink to='/books'>Books</NavLink>
				</Nav.Link>
				<Nav.Link className='category'>
					<NavLink to='/mobiles'>Mobiles</NavLink>
				</Nav.Link>
				<NavDropdown className='category active' title='Gaming'>
					<LinkContainer to='/gaming/cd'>
						<NavDropdown.Item>Gaming CDs</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/gaming/consoles'>
						<NavDropdown.Item>Gaming Consoles</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/gaming/acce'>
						<NavDropdown.Item>Gaming Accessories</NavDropdown.Item>
					</LinkContainer>
				</NavDropdown>

				<Nav className='ml-auto'>
					<div id='navSearchBox'>
						<FontAwesomeIcon id='navSearchIcon' icon={faSearch} />
						<Form.Control
							id='navSearchInput'
							type='text'
							placeholder='Search for products'
						/>
					</div>
					<Nav.Link>
						<FontAwesomeIcon
							id='mainNavHeart'
							className='navIcon'
							icon={faHeart}
						/>
					</Nav.Link>
					<Nav.Link>
						<FontAwesomeIcon className='navIcon' icon={faBell} />
					</Nav.Link>
					<Nav.Link
						id='userImage'
						// onClick={this.props.onUserClick}
					>
						<Image
							style={{
								maxWidth: 42,
							}}
							src={
								user.userId
									? 'https://placekitten.com/g/300/300'
									: '/images/genericUser.png'
							}
							roundedCircle
						/>
					</Nav.Link>
				</Nav>
			</Navbar>
			<div id='mobileSearchBox'>
				<div className='ml-auto' id='mobileSearchBoxItem'>
					<FontAwesomeIcon id='mobileSearchIcon' icon={faSearch} />
					<Form.Control
						id='mobileSearchInput'
						type='text'
						placeholder='Search for products'
					/>
				</div>
			</div>
		</div>
	);
};

export default withRouter(MainNav);
