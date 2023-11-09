import socialStyles from './social.module.scss';


const social_array = [
	{
		iconLink: './assets/icons/social/facebook.svg',
		shareLink: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2FEfess86&amp;src=sdkpreparse',
		targetWindow: '_blank',
		alt: 'facebook icon'
	},
	{
		iconLink: './assets/icons/social/twitter.svg',
		shareLink: 'http://twitter.com/intent/tweet?text=View my linkedIn profile &url=https://www.linkedin.com/in/kolpaxidis-v/&hashtags=Kolpaxidis_V,front_end_developer,linkedin_profile',
		targetWindow: '_self',
		alt: 'twitter icon'
	},
	{
		iconLink: './assets/icons/social/pinterest.svg',
		shareLink: 'https://pin.it/20pbLzB',
		targetWindow: '_blank',
		alt: 'pinterest icon'
	},
	{
		iconLink: './assets/icons/social/instagram.svg',
		shareLink: 'https://www.instagram.com/p/CzbANjcovgv/?utm_source=ig_web_button_share_sheet&igshid=OWZiMDc0N2E0OA==',
		targetWindow: '_self',
		alt: 'instagram icon'
	}
];


export const drawSocial = () => {
	const socialContainer = document.createElement('div');
	socialContainer.classList.add(socialStyles.socialContaner);

	social_array.forEach((item) => {
		const socialLink = document.createElement('a');
		const socialIcon = document.createElement('img');

		socialLink.href = item.shareLink;
		socialLink.target = item.targetWindow;
		socialLink.classList.add('social-link');
		socialLink.setAttribute('data-href', item.shareLink);

		socialIcon.src = item.iconLink;
		socialIcon.alt = item.alt;

		socialLink.appendChild(socialIcon);
		socialContainer.appendChild(socialLink);

		socialLink.addEventListener('click', function (event) {
			event.preventDefault();
			const href = this.getAttribute('data-href');
			window.open(href, 'twitterwindow', 'left=20,top=20,width=1100,height=600,toolbar=0,resizable=1');
		});
	});

	return socialContainer;
};