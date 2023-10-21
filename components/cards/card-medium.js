import cardStyles from "./card-medium.module.scss";
import { starRating } from "../star-rating/star-rating";

export const cardMedium = ({ title, price, buy, itemLink, like, imgUrl, rating }) => {
	return `
	<div class="card">
		<div class="image">
			<img src="${imgUrl}" alt="${title}">
		</div>

		<div class="cardFooter">

			<div class="cardInfo">
				<div class="title">
					<h3>${title}</h3>
					<p>${price}</p>
					${starRating(rating)}
				</div>
			</div>

			<div class="buyBtn">
				<a href="${buy}" class="${cardStyles.cardInfoBtn}">
				<img src="/assets/icons/bag.svg" alt="bag button">
				</a>
			</div>

		</div>

		<div class="cardInfoHover">
			<a href="${itemLink}" class="${cardStyles.cardInfoBtn}">
				<img src="/assets/icons/eye.svg" alt="eye button">
			</a>
			<a href="${like}" class="${cardStyles.cardInfoBtn}">
				<img src="/assets/icons/heart.svg" alt="heart button">
			</a>
		</div>
	</div>
	`;
}