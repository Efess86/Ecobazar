import './card-small.scss';
import { starRating } from '../star-rating/star-rating';

export const cardSmall = ({ title, price, imgUrl, rating }) => {
	return `
    <div class="card-small">
      <div class="slm-card-img">
        <img src="${imgUrl}" alt="${title}">
      </div>
      <div class="slm-card-info">
        <h3>${title}</h3>
        <p>${price}</p>
        ${starRating(rating)}
      </div>
    </div>
  `;
};
