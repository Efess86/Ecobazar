import './card-small.scss';
import { starRating } from '../star-rating/star-rating';

export const cardSmall = ({ title, price, imgUrl, rating }) => {
  return `
    <div class="card-small">

      <div class="slm-card-img">
        <img src="${imgUrl}" alt="${title}">
      </div>

      <div class="slm-card-title">
        <h3>${title}</h3>
      </div>

      <div class="slm-card-info">
        <p>${price}</p>
        ${starRating(rating)}
      </div>

      <div class="slm-card-info-hover">
        <a href="#" class="slm-card-info-btn">
          <img src="/assets/icons/bag.svg" alt="bag button">
        </a>
  
        <a href="#" class="slm-card-info-btn">
          <img src="/assets/icons/eye.svg" alt="eye button">
        </a>
  
        <a href="#" class="slm-card-info-btn">
          <img src="/assets/icons/heart.svg" alt="heart button">
        </a>
      </div>

    </div>
  `;
};
