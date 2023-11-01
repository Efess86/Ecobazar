import sampleStyles from './sample.module.scss';

import { cardSmall } from "../components/cards/card-small";
import { cardMedium } from "../components/cards/card-medium";
import { cardLarge } from '../components/cards/card-large';
// import { setTimer } from "../components/timer/timer";


import { btnSmallFill, btnSmallBorder, btnSmallGhost } from "../components/buttons/btn-small";
import { btnMediumFill, btnMediumBorder, btnMediumGhost } from "../components/buttons/btn-medium";
import { btnLargeFill, btnLargeBorder, btnLargeGhost } from "../components/buttons/btn-large";
import { btnIconSmall, btnIconMedium, btnIconLarge } from "../components/buttons/btn-icon";


const CARD_SMALL_ARRAY = [
	{
		title: 'Chanise Cabbage',
		price: '$14.99',
		oldPrice: '$12,99',
		priceSize: 14,
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 1.7,
	},

	{
		title: 'Chanise Cabbage',
		price: '$6.59',
		oldPrice: '$12,99',
		priceSize: 14,
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 4.1,
	},

	{
		title: 'Green Apples',
		price: '$8.99',
		oldPrice: '$12,99',
		priceSize: 14,
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 2.3,
	},
];

const CARD_MEDIUM_ARRAY = [
	{
		title: 'Chanise Cabbage',
		sale: 'Discount 2$',
		bestSeller: '',
		newItem: 'New!',
		outOfStock: '',
		price: '$14.99',
		oldPrice: '$16.99',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 4.5,
	},

	{
		title: 'Chanise Cabbage',
		sale: '',
		bestSeller: '',
		newItem: '',
		outOfStock: 'Out of Stock',
		price: '0$',
		oldPrice: '$5.30',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 4.1,
	},

	{
		title: 'Green Apples',
		sale: '',
		bestSeller: 'Best Seller',
		newItem: 'New!',
		outOfStock: '',
		price: '$8.99',
		oldPrice: '',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 2.3,
	},
];

const CARD_LARGE_ARRAY = [
	{
		id: 'timer1',
		title: 'Fresh Indian Malta',
		sale: '',
		bestSeller: 'Best Seller',
		newItem: '',
		outOfStock: '',
		price: '$14.99',
		oldPrice: '',
		priceSize: "16px",
		buy: '',
		itemLink: '',
		like: '',
		imgUrl: '/assets/images/fresh_indian_malta.jpg',
		rating: 4.5,
		timerDays: '',
		timerHours: '2',
		timerMinutes: '',
		timerSeconds: ''
	},
	{
		id: 'timer2',
		title: 'Chanise Cabbage',
		sale: 'Discount 10%',
		bestSeller: '',
		newItem: '',
		outOfStock: '',
		price: '$17.99',
		oldPrice: '$19.99',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/chanise_cabbage.jpg',
		rating: 4.5,
		timerDays: '0',
		timerHours: '2',
		timerMinutes: '15',
		timerSeconds: '12'
	},
	{
		id: 'timer3',
		title: 'Green Lettuce',
		sale: '',
		bestSeller: '',
		newItem: 'New',
		outOfStock: '',
		price: '$9.00',
		oldPrice: '',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_lettuce.jpg',
		rating: 4.5,
		timerDays: '0',
		timerHours: '4',
		timerMinutes: '2',
		timerSeconds: '5'
	},
	{
		id: 'timer4',
		title: 'Green apples',
		sale: '',
		bestSeller: '',
		newItem: '',
		outOfStock: 'Out of Stock',
		price: '0',
		oldPrice: '$22.50',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/green_apples.png',
		rating: 4.5,
		timerDays: '1',
		timerHours: '0',
		timerMinutes: '37',
		timerSeconds: '55'
	},
	{
		id: 'timer5',
		title: 'Smith apples',
		sale: 'Discount 2$',
		bestSeller: '',
		newItem: 'New!',
		outOfStock: '',
		price: '$14.99',
		oldPrice: '$16.99',
		priceSize: "16px",
		buy: 'https://www.google.com/',
		itemLink: 'https://www.google.com/',
		like: 'https://www.google.com/',
		imgUrl: '/assets/images/large_apples.jpg',
		rating: 4.5,
		timerDays: '0',
		timerHours: '0',
		timerMinutes: '44',
		timerSeconds: '34'
	},

];

//  ===== Cards small =====
export const cardSmallComp = () => {
	let html = '';
	CARD_SMALL_ARRAY.forEach((item) => {
		html += cardSmall(item);
	});
	return html;
};
//  ===== Cards medium =====

export const cardMediumComp = () => {
	let html = '';
	CARD_MEDIUM_ARRAY.forEach((item) => {
		html += cardMedium(item);
	});
	return html;
};


export const cardLargeComp = () => {
	let html = '';
	CARD_LARGE_ARRAY.forEach((item) => {
		html += cardLarge(item);
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


// export const setTimerSale = (timerDays, timerHours, timerMinutes, timerSeconds) => {
// 	let intervalId;

// 	intervalId = setInterval(() => {
// 		if (timerSeconds > 0) {
// 			timerSeconds--;
// 		} else {
// 			if (timerMinutes > 0) {
// 				timerMinutes--;
// 				timerSeconds = 59;
// 			} else {
// 				if (timerHours > 0) {
// 					timerHours--;
// 					timerMinutes = 59;
// 					timerSeconds = 59;
// 				} else {
// 					if (timerDays > 0) {
// 						timerDays--;
// 						timerHours = 23;
// 						timerMinutes = 59;
// 						timerSeconds = 59;
// 					} else {
// 						// Таймер закончился
// 						clearInterval(intervalId);
// 						console.log('time is over');
// 						return;
// 					}
// 				}
// 			}
// 		}

// 		const timerElement = document.getElementById('timer');
// 		if (timerElement) {
// 			timerElement.innerHTML = setTimer(timerDays, timerHours, timerMinutes, timerSeconds);
// 		}
// 	}, 1000);

// 	return `<div class="${sampleStyles.timerStyles}" id="timer">${setTimer(timerDays, timerHours, timerMinutes, timerSeconds)}</div>`;
// };