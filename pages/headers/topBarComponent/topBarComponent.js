import { setCurrencyLanguage } from "../../../components/header/currencyLanguage/currencyLanguage";
import { signInSignUp } from "../../../components/header/signIn-signUp/signIn-signUp";
import topBarStyles from './topBarComponent.module.scss';

export const topBarComponent = (login, register, imgStyle, wrapperClass, selectStyle, optionStyle, loginStyle) => {

	return `
		<div style="${wrapperClass}">
			<div class="${topBarStyles.topBarContainer}">
				<div class="${topBarStyles.topBarLocation}">
					<img src="assets/icons/header/location.svg" alt="location icon" style="${imgStyle}">
					<p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
				</div>
				<div class="${topBarStyles.topBarLanguage}">
					${setCurrencyLanguage(selectStyle, optionStyle)}
					|
					${signInSignUp(login, register, loginStyle)}
				</div>
			</div>
		</div>
	`;
}