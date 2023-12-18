import { setCurrencyLanguage } from "../../../../components/header/currencyLanguage/currencyLanguage";
import { signInSignUp } from "../../../../components/header/signIn-signUp/signIn-signUp";
import { search } from "../../../../components/header/search/search";
import { cartAmount } from "../../../../components/header/cartAmmount/cartAmount";
import { cartIcon } from "../../../../components/header/cartIcon/cartIcon";
import { favourites } from "../../../../components/header/favourites/favourites";

import barStyles from './topBarComponent.module.scss';

export const topBarComponent = (
	//Top bar ----
	login,
	register,
	loginStyle,
	imgStyle,
	topBarWrapper,
	selectStyle,
	optionStyle,
	// Middle bar ----
	middleBarWrapper,
	placeholder,
	currencySign,
	currencyNumber,
	itemsAmount
) => {

	return `
		<div style="${topBarWrapper}">
			<div class="${barStyles.topBarContainer}">
				<div class="${barStyles.topBarLocation}">
					<img src="assets/icons/header/location.svg" alt="location icon" style="${imgStyle}">
					<p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
				</div>
				<div class="${barStyles.topBarLanguage}">
					${setCurrencyLanguage(selectStyle, optionStyle)}
					|
					${signInSignUp(login, register, loginStyle)}
				</div>
			</div>
		</div>

		<div style="${middleBarWrapper}">
			<div class="${barStyles.middleBarContainer}">
				<div class="${barStyles.logoContainer}">
					<a href="#">
						<img src="/assets/logo.svg" alt="main logo">
						<h1>Ecobazar</h1>
					</a>
				</div>
				${search(placeholder)}

				<div class="${barStyles.currency}">
					${cartIcon(itemsAmount)}
					${cartAmount(currencySign, currencyNumber)}
				</div>
			</div>
		</div>
	`;
}