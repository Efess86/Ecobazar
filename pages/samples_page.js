import { cardSmall } from "../components/cards/card-small";
import { btnSmallFill, btnSmallBorder, btnSmallGhost } from "../components/buttons/btn-small";
import { btnMediumFill, btnMediumBorder, btnMediumGhost } from "../components/buttons/btn-medium";
import { btnLargeFill, btnLargeBorder, btnLargeGhost } from "../components/buttons/btn-large";
import { btnIconSmall, btnIconMedium, btnIconLarge } from "../components/buttons/btn-icon";


const SAMPLE_ARRAY = [
	{ title: 'Chanise Cabbage', price: '$14.99', imgUrl: '/assets/images/chanise_cabbage.png', rating: 1.7, },
	{ title: 'Chanise Cabbage', price: '$14.99', imgUrl: '/assets/images/chanise_cabbage.png', rating: 4.1, },
	{ title: 'Green Apples', price: '$8.99', imgUrl: '/assets/images/green_apples.png', rating: 2.3, },
];

export const cardsSample = () => {
	let html = '';
	SAMPLE_ARRAY.forEach((item) => {
		html += cardSmall(item);
	});
	return html;
};

export const btnSample = () => {
	const htmlArray = [];

	//  ======== Small btns ===========
	htmlArray.push(btnSmallFill('Small Fill'));
	htmlArray.push(btnSmallBorder('Small Border'));
	htmlArray.push(btnSmallGhost('Small Ghost'));

	htmlArray.push(`<br />`);
	htmlArray.push(`<br />`);

	//  ======== Medium btns ===========
	htmlArray.push(btnMediumFill('Medium Fill'));
	htmlArray.push(btnMediumBorder('Medium Border'));
	htmlArray.push(btnMediumGhost('Medium Ghost'));

	htmlArray.push(`<br />`);
	htmlArray.push(`<br />`);

	//  ======== Large btns ===========
	htmlArray.push(btnLargeFill('Large Fill'));
	htmlArray.push(btnLargeBorder('Large Border'));
	htmlArray.push(btnLargeGhost('Large Ghost'));

	htmlArray.push(`<br />`);
	htmlArray.push(`<br />`);

	//  ======== Icon btns ===========
	htmlArray.push(btnIconSmall('Small Icon', './assets/icons/eye.svg'));
	htmlArray.push(btnIconMedium('Medium Icon', './assets/icons/heart.svg'));
	htmlArray.push(btnIconLarge('Large Icon', './assets/icons/bag.svg'));

	const html = htmlArray.join('');
	return html;
};