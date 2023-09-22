import './card-small.scss';

export const cardSmall = (title, price, imgUrl) => {

	return (
		<div class="card-small">
			<div class="slm-card-img">
				<img src={imgUrl}></img>
			</div>
			<div class="slm-card-info">
				<h3>{title}</h3>
				<p>{price}</p>
				<div class="star-rating"></div>
			</div>
		</div>
	)
};

