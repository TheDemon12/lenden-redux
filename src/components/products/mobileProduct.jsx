import React from 'react';
import CommonProduct from './../common/commonProduct';
import { faExchangeAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

class MobileProduct extends CommonProduct {
	render() {
		const {
			id,
			name,
			desc,
			src,
			rating,
			ldc,
			wishlist,
			canBarter,
		} = this.props.product;
		const { onClick, onBarter } = this.props;
		return (
			<div>
				<div className='mobileProductContainer'>
					<div className='mobileProductImageContainer' onClick={onClick}>
						{this.renderProductImage(src)}
					</div>
					<div className='mobileProductDetailContainer'>
						<div className='mobileProductNameContainer' onClick={onClick}>
							{this.renderProductName(name)}
						</div>
						<div
							className='mobileProductDescriptionContainer'
							onClick={onClick}>
							{this.renderDescription(desc)}
						</div>
						<div className='mobileProductInnerContainer'>
							<div className='mobileProductMixedContainer'>
								{this.renderLdc(ldc)}

								{this.renderStarRating(rating)}
							</div>

							<div className='mobileProductActions'>
								{this.renderButton(
									() => (canBarter ? onBarter(id) : ''),
									'BARTER',
									`barter ${canBarter ? '' : 'disabled'}`,
									faExchangeAlt
								)}

								{this.renderButton(
									() => {
										console.log('btn');
									},
									'',
									'wishlist',
									faHeart,
									wishlist ? '#fdba49' : '#fff'
								)}
							</div>
						</div>
					</div>
				</div>

				<hr style={{ margin: 0 }} />
			</div>
		);
	}
}

export default MobileProduct;
