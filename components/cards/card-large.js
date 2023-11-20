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
				<a href="#" class="${cardStyles.like}">
					<img src="/assets/icons/heart.svg" alt="like button">
				</a>
				<a href="#" class="${cardStyles.bag}">
					Add to Cart
					<img src="/assets/icons/bag.svg" alt="show button">
				</a>
				<a href="#" class="${cardStyles.eye}">
					<img src="/assets/icons/eye.svg" alt="show button">
				</a>
			</div>
			<div class="${cardStyles.content}">
				<h2>${title}</h2>
				${setPrice(price, oldPrice, priceSize)}
				${starRating(rating)}
				<span>Hurry up! Offer ends In:</span>
				${setTimer(id, timerDays, timerHours, timerMinutes, timerSeconds, cardStyles.timerContainer)}
			</div>
		</div>
	</div>
	`;
}