import socilaStyles from './social.module.scss';

export const showSocial = (
	facebookTarget,
	twitterTarget,
	pinterestTarget,
	instagramTarget,
	facebookLink,
	twitterLink,
	pinterestLink,
	instagramLink
) => {

	return `
	<div class="${socilaStyles.socialContaner}">
		<a href="${facebookLink}" target="${facebookTarget}">
			<img src="./assets/icons/social/facebook.svg" alt="facebook icon">
		</a>
		<a href="${twitterLink}" target="${twitterTarget}">
			<img src="./assets/icons/social/twitter.svg" alt="twitter icon">
		</a>
		<a href="${pinterestLink}" target="${pinterestTarget}">
			<img src="./assets/icons/social/pinterest.svg" alt="pinterest icon">
		</a>
		<a href="${instagramLink}" target="${instagramTarget}">
			<img src="./assets/icons/social/instagram.svg" alt="instagram icon">
		</a>
	</div>
	`;
};