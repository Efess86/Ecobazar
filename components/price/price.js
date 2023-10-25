import priceStyles from './price.module.scss';


export const setPrice = (price, oldPrice, priceSize) => {

	return `
	<div class="${priceStyles.priceContainer}">
		<p style="font-size: ${priceSize};">${price}</p> <p style="font-size: ${priceSize};">${oldPrice}</p>
	</div>
	`
};