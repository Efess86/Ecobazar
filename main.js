import { cardSmall } from "./components/card-small/card-small";

const SAMPLE_ARRAY = [
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png', starRating: 4 },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png', starRating: 4.5 },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png', starRating: 2.8 },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png', starRating: 1.2 },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png', starRating: 5 },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png', starRating: 3.4 },
]

const app = document.querySelector('#app');

SAMPLE_ARRAY.map((item) => {
	app.appendChild(cardSmall(item.title, item.price, item.imageUrl, item.starRating));
})
