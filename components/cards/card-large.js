import cardStyles from "./card-large.module.scss";
import { starRating } from "../star-rating/star-rating";
import { setPrice } from "../price/price";
import { setTimer } from "../timer/timer";

export const cardLarge = ({
	id,
	title,
	sale,
	bestSeller,
	newItem,
	outOfStock,
	price,
	oldPrice,
	priceSize,
	buy,
	itemLink,
	like,
	imgUrl,
	rating,
	timerDays,
	timerHours,
	timerMinutes,
	timerSeconds }) => {

	const saleClass = sale === "" ? cardStyles.displayNone : cardStyles.label;
	const bestSellerClass = bestSeller === "" ? cardStyles.displayNone : cardStyles.label;
	const newItemClass = newItem === "" ? cardStyles.displayNone : cardStyles.label;
	const outOfStockClass = outOfStock === "" ? cardStyles.displayNone : cardStyles.label;

	let intervalId;

	intervalId = setInterval(() => {
		if (timerSeconds > 0) {
			timerSeconds--;
		} else {
			if (timerMinutes > 0) {
				timerMinutes--;
				timerSeconds = 59;
			} else {
				if (timerHours > 0) {
					timerHours--;
					timerMinutes = 59;
					timerSeconds = 59;
				} else {
					if (timerDays > 0) {
						timerDays--;
						timerHours = 23;
						timerMinutes = 59;
						timerSeconds = 59;
					} else {
						// Таймер закончился
						clearInterval(intervalId);
						console.log('time is over');
						return;
					}
				}
			}
		}

		const timerElement = document.getElementById(id);
		if (timerElement) {
			timerElement.innerHTML = setTimer(timerDays, timerHours, timerMinutes, timerSeconds);
		}
	}, 1000);


	return `
	<div class="${cardStyles.card}">
		<div class="${cardStyles.labelWrapper}">
			<p class="${saleClass} ${cardStyles.sale}"> 
				${sale}    
			</p>
			<p class="${bestSellerClass} ${cardStyles.bestSeller}">
				${bestSeller}
			</p>
			<p class="${newItemClass} ${cardStyles.newItem}">
				${newItem}
			</p>
			<p class="${outOfStockClass} ${cardStyles.outOfStock}">
				${outOfStock}
			</p>
		</div>
		<div class="${cardStyles.cardImage}">
			<img src="${imgUrl}" alt="${title}">
		</div>
		<div class="${cardStyles.contentContainer}">
			<div class="${cardStyles.cardBtns}">
				<a href="#">
					<img src="/assets/icons/heart.svg" alt="like button">
				</a>
				<a href="#">
					Add to Cart
					<img src="/assets/icons/bag.svg" alt="show button">
				</a>
				<a href="#">
					<img src="/assets/icons/eye.svg" alt="show button">
				</a>
			</div>
			<div class="${cardStyles.content}">
				<h2>${title}</h2>
				${setPrice(price, oldPrice, priceSize)}
				${starRating(rating)}
				<div class="${cardStyles.timerStyles}" id="${id}">${setTimer(timerDays, timerHours, timerMinutes, timerSeconds)}</div>
			</div>
		</div>
	</div>
	`;
}