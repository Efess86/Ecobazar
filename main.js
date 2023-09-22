import { cardSmall } from "./components/card-small/card-small";

const SAMPLE_ARRAY = [
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png' },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png' },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png' },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png' },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png' },
	{ title: 'Chanise Cabbage', price: '$14.99', imageUrl: '/assets/images/chanise_cabbage.png' },
]

const app = document.querySelector('#app');

SAMPLE_ARRAY.map((item) => {
	app.appendChild(cardSmall(item.title, item.price, item.imageUrl));
})
