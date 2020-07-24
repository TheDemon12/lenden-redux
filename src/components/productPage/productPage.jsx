import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateDeviceType } from '../../app/entities/common';
import { getProduct } from '../../app/entities/productPage';
import MobileProductPage from './mobileProductPage';
import DesktopProductPage from './desktopProductPage';
import PageLoader from './../common/pageLoader';

const ProductPage = props => {
	const dispatch = useDispatch();

	const { isMobile } = useSelector(state => state.entities.common);
	dispatch(updateDeviceType());

	const { product, loadingPage, productFound } = useSelector(
		state => state.entities.productPage
	);

	useEffect(() => {
		dispatch(getProduct(props.match.params.id));
		window.addEventListener('resize', () => dispatch(updateDeviceType()));

		return () => {
			window.removeEventListener('resize', () => dispatch(updateDeviceType()));
		};
	}, [dispatch]);

	if (loadingPage) return <PageLoader />;
	if (!productFound) return <Redirect to='/' />;
	return isMobile ? (
		<MobileProductPage
			product={product}
			// onBarter={handleBarter}
		/>
	) : (
		<DesktopProductPage
			product={product}
			// onBarter={handleBarter}
		/>
	);
};

export default ProductPage;
