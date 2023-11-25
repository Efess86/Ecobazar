import searchStyles from './search.module.scss';


export const search = (placeHolder) => {

	return `
		<div class="${searchStyles.search}">
			<img src="assets/icons/search.svg" alt="search icon">
			<input type="text" id="search" placeholder="${placeHolder}">
			<button>search</button>
		</div>
	`;
}