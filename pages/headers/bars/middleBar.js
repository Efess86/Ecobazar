import { search } from '../../../components/header/search/search';
import { favourites } from '../../../components/header/favourites/favourites';
import { cartIcon } from '../../../components/header/cartIcon/cartIcon';
import { cartAmount } from '../../../components/header/cartAmmount/cartAmount';

import barStyles from './middleBar.module.scss';


export const middleBar = (
	middleBarWrapper,
	placeholder,
	itemsAmount,
	currencySign,
	currencyNumber,
) => {
	return `
	
	<div style="${middleBarWrapper}">

			<div class="${barStyles.middleBarContainer}">
				<div class="${barStyles.middleBarLogo}">
					<a href="#">
						<img src="/assets/logo.svg" alt="main logo">
						<h1>Ecobazar</h1>
					</a>
				</div>


				${search(placeholder)}

				<div class="${barStyles.middleBarNav}">
					${favourites()} 
					<div class="${barStyles.middleBarBasket}">
						${cartIcon(itemsAmount)}
						${cartAmount(currencySign, currencyNumber)}
					</div>
				</div>

			</div>

		</div>

	`;
}