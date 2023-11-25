import cartStyles from './cartIcon.module.scss';

export const cartIcon = (itemsAmount) => {

	return `
		<div class="${cartStyles.cartIcon}">
			<img src="/assets/icons/bag.svg" alt="cart icon">
			<p>${itemsAmount}</p>
		</div>
	`;
}