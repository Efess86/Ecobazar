import burgerStyles from './burgerIcon.module.scss';


export const burgerIcon = () => {

	return `
	<label class="${burgerStyles.menu}">
		<input type="checkbox" checked id="burger-menu-icon">
		<div>
			<span></span>
			<span></span>
		</div>
		<div class="allCategories ${burgerStyles.allCategories}">
			<h2>All Categories</h2>
			<img src="/assets/icons/header/select-arrow.svg" alt="select icon">
		</div>
	</label>
	`;
};