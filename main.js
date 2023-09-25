import { cardSmall } from "./components/card-small/card-small"; // Путь к cardSmall нужно указать правильно

const SAMPLE_ARRAY = [
	{ title: 'Chanise Cabbage', price: '$14.99', imgUrl: '/assets/images/chanise_cabbage.png', rating: 1.7, },
	{ title: 'Chanise Cabbage', price: '$14.99', imgUrl: '/assets/images/chanise_cabbage.png', rating: 4.1, },
	{ title: 'Chanise Cabbage', price: '$14.99', imgUrl: '/assets/images/chanise_cabbage.png', rating: 2.3, },
	{ title: 'Chanise Cabbage', price: '$14.99', imgUrl: '/assets/images/chanise_cabbage.png', rating: 4.8, },
	// Другие элементы массива
];

const app = document.querySelector('#app');

SAMPLE_ARRAY.forEach((item) => {
	const cardHtml = cardSmall(item);
	app.insertAdjacentHTML('beforeend', cardHtml);
});
