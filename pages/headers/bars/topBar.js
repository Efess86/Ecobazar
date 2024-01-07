import { setCurrencyLanguage } from "../../../components/header/currencyLanguage/currencyLanguage";
import { signInSignUp } from "../../../components/header/signIn-signUp/signIn-signUp";

import barStyles from './topBar.module.scss';


export const topBar = (
	topBarWrapper,
	imgStyle,
	selectStyle,
	optionStyle,
	login,
	register,
	loginStyle,
) => {

	return `
		<div style="${topBarWrapper}">
			<div class="${barStyles.topBarContainer}">
				<div class="${barStyles.topBarLocation}">
					<a href="https://maps.app.goo.gl/boHLTLebzQRciDzh6" target="_blank">
						<img src="assets/icons/header/location.svg" alt="location icon" style="${imgStyle}">
						<p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
						<span>Location</span>
					</a>
				</div>
				<div class="${barStyles.topBarLanguage}">
					${setCurrencyLanguage(selectStyle, optionStyle)}
					<span>|</span>
					${signInSignUp(login, register, loginStyle)}
				</div>
			</div>
		</div>
	`;
}

