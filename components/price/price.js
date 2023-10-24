import priceStyles from './price.module.scss';


export const setPrice = (price, discount) => {

	return `
	<div class="${priceStyles.priceContainer}">
		<p>${price}</p> <p>${discount}</p>
	</div>
	`
};