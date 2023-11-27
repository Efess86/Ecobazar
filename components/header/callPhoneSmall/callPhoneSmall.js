import callPhoneSmallStyles from './callPhoneSmall.module.scss';

export const callPhoneSmall = (telNumberLink, telNumber, imgStyle) => {

	return `
		<div class="${callPhoneSmallStyles.callPhoneSmall}">
			<a href="tel:${telNumberLink}" style="${imgStyle}">
				<img src="assets/icons/header/phoneCall.svg" alt="phone call icon">
				${telNumber}
			</a>
		</div>
	`;
}