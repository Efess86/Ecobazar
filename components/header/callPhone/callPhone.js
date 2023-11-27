import callPhoneStyles from './callPhone.module.scss';

export const callPhone = (telNumberLink, telNumber) => {

	return `
		<div class="${callPhoneStyles.callPhone}">
			<p>Customer Services</p>
			<a href="tel:${telNumberLink}">
				<img src="assets/icons/header/phoneCall.svg" alt="phone call icon">
				${telNumber}
			</a>
		</div>
	`;
}