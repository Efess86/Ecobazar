import cardStyles from "./card-medium.module.scss";
import { starRating } from "../star-rating/star-rating";
import { setPrice } from "../price/price";

export const cardMedium = ({ title, sale, bestSeller, newItem, outOfStock, price, oldPrice, priceSize, buy, itemLink, like, imgUrl, rating }) => {
	// if empty string true add displayNone class
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
			<div class="${cardStyles.content}">
				<h2>${title}</h2>
				${setPrice(price, oldPrice, priceSize)}
				${starRating(rating)}
			</div>
			<div class="${cardStyles.cardBtnsContainer}">
				<div class="${cardStyles.cardBtns}">
					<a href="#">
						<img src="/assets/icons/heart.svg" alt="like button">
					</a>
					<a href="#">
						<img src="/assets/icons/eye.svg" alt="show button">
					</a>
				</div>
				<div class="${cardStyles.cardBtnsLast}">
					<a href="#">
						<img src="/assets/icons/bag.svg" alt="show button">
					</a>
				</div>
			</div>
		</div>
	</div>
	`;
}