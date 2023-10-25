import cardStyles from './card-small.module.scss';
import { starRating } from '../star-rating/star-rating';
import { setPrice } from '../price/price';

export const cardSmall = ({ title, price, oldPrice, buy, itemLink, like, imgUrl, rating }) => {
  return `
    <div class="${cardStyles.card}">

      <div class="${cardStyles.cardImage}">
        <img src="${imgUrl}" alt="${title}">
      </div>

      <div class="${cardStyles.cardTitle}">
        <h3>${title}</h3>
      </div>

      <div class="${cardStyles.cardInfo}">
        ${setPrice(price, oldPrice)}
        ${starRating(rating)}
      </div>

      <div class="${cardStyles.cardInfoHover}">
        <a href="#" class="${cardStyles.cardInfoBtn}">
          <img src="/assets/icons/bag.svg" alt="bag button">
        </a>
  
        <a href="#" class="${cardStyles.cardInfoBtn}">
          <img src="/assets/icons/eye.svg" alt="eye button">
        </a>
  
        <a href="#" class="${cardStyles.cardInfoBtn}">
          <img src="/assets/icons/heart.svg" alt="heart button">
        </a>
      </div>

    </div>
  `;
};
