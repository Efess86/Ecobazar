import { setCurrencyLanguage } from "../../../components/header/currencyLanguage/currencyLanguage";
import { signInSignUp } from "../../../components/header/signIn-signUp/signIn-signUp";
import topBarStyles from './topBarComponent.module.scss';

export const topBarComponent = (login, register) => {

	return `
		<div class="${topBarStyles.topBarContainer}">
			<div class="${topBarStyles.topBarLocation}"> 
				<img src="assets/icons/header/location.svg" alt="location icon">
				<p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
			</div>
			<div class="${topBarStyles.topBarLanguage}">
				${setCurrencyLanguage()}
				|
				${signInSignUp(login, register)}
			</div>
		</div>
	`;
}