import './star-rating.scss';


export const starRating = (rating) => {

	return (
		<div class="Stars" style={{ "--rating": `${rating};` }} aria- label={`Rating of this product is ${rating} out of 5.`} ></div >
	)
};
