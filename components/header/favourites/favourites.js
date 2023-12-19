import favoriteStyles from './favourites.module.scss';

export const favourites = () => {
	return `
		<div class="${favoriteStyles.favorites}">
			<img src="assets/icons/header/favorites.svg" alt="favorite icon">
		</div>
	`;
}