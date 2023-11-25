import cartAmountStyles from './cartAmount.module.scss';

export const cartAmount = (currency, ammount) => {

	return `
		<div class="${cartAmountStyles.cartAmount}">
			<span>Shopping cart:</span>
			<p>${currency}${ammount}</p>
		</div>
	`;
}