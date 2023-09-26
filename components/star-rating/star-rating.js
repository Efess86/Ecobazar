import './star-rating.scss';

export const starRating = (localRating) => {
	return `
	  <div
		class="stars"
		style="--rating: ${localRating};"
		aria-label="Rating of this product is ${localRating} out of 5."
	  ></div>
	`;
};
