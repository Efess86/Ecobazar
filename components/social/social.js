import socialStyles from './social.module.scss';


const social_array = [
	{
		iconLink: './assets/icons/social/facebook.svg',
		shareLink: 'https://www.facebook.com',
		targetWindow: '_blank',
		alt: 'facebook icon'
	},
	{
		iconLink: './assets/icons/social/twitter.svg',
		shareLink: 'https://twitter.com',
		targetWindow: '_self',
		alt: 'twitter icon'
	},
	{
		iconLink: './assets/icons/social/pinterest.svg',
		shareLink: 'https://www.pinterest.com',
		targetWindow: '_blank',
		alt: 'pinterest icon'
	},
	{
		iconLink: './assets/icons/social/instagram.svg',
		shareLink: 'https://www.instagram.com',
		targetWindow: '_self',
		alt: 'instagram icon'
	}
];

export const drawSocial = () => {

	const html = social_array.map((item) => {
		return `
		<a href="${item.shareLink}" target="${item.targetWindow}">
			<img src="${item.iconLink}" alt="${item.alt}">
		</a>`;
	}).join('');


	return `
    	<div class="${socialStyles.socialContaner}">
			${html}
    	</div>
  `;
};