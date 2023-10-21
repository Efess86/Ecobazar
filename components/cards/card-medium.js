import cardStyles from "./card-medium.module.scss";
import { starRating } from "../star-rating/star-rating";

export const cardMedium = ({ title, price, buy, itemLink, like, imgUrl, rating }) => {
	return `
	<div class="${cardStyles.card}">
		<div class="${cardStyles.cardImage}">
			<img src="${imgUrl}" alt="${title}">
		</div>
		<div class="${cardStyles.contentContainer}">
			<div class="${cardStyles.content}">
				<h2>${title}</h2>
				<p>${price}</p>
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