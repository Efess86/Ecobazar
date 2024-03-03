import categoriesStyles from './allCategoriesMobile.module.scss';


export const allCategoriesMobile = () => {

	return `
	<label class="${categoriesStyles.menu}">
		<input class="allCategoriesInput" type="checkbox" checked id="allCategoriesMobileInput">
		<div>
			<span></span>
			<span></span>
		</div>
		

		<div class="${categoriesStyles.categories}">

			<a href="#">
				<div >
					<img src="assets/icons/header/allCategories/vegetables.svg" alt="vegetables icon">
					Vegetables
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/fish.svg" alt="fish icon">
					Fish
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/chicken-meat.svg" alt="chicken icon">
					Chicken & Meat
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/drink-water.svg" alt="drink-water icon">
					Drink & Water
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/yogurt-ice-cream.svg" alt="yogurt-ice-cream icon">
					Yogurt & Ice Cream
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/cake-bread.svg" alt="cake-bread icon">
					Cake & Bread
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/butter-cream.svg" alt="butter-cream icon">
					Butter & Cream
				</div>
			</a>

			<a href="https://google.com" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/cooking.svg" alt="cooking icon">
					Cooking
				</div>
			</a>

			<a href="https://google.com" class="${categoriesStyles.viewMore}" target='_blank'>
				<div >
					<img src="assets/icons/header/allCategories/view-more.svg" alt="view more icon">
					View all Category
				</div>
			</a>

		</div>

	</label>

	`;
};