import categoriesStyles from './allCategories.module.scss';


export const allCategories = () => {

	return `
	<label class="${categoriesStyles.menu}">
		<input class="allCategoriesInput" type="checkbox" checked id="burger-menu-icon">
		<div>
			<span></span>
			<span></span>
		</div>
		<div class="allCategories ${categoriesStyles.allCategories}">
			<h2>All Categories</h2>
			<img src="assets/icons/header/select-arrow.svg" alt="select icon">
		</div>

		<div class="allCategoriesMenu ${categoriesStyles.categories}">

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/vegetables.svg" alt="vegetables icon">
					Vegetables
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/fish.svg" alt="fish icon">
					Fish
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/chicken-meat.svg" alt="chicken icon">
					Chicken & Meat
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/drink-water.svg" alt="drink-water icon">
					Drink & Water
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/yogurt-ice-cream.svg" alt="yogurt-ice-cream icon">
					Yogurt & Ice Cream
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/cake-bread.svg" alt="cake-bread icon">
					Cake & Bread
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/butter-cream.svg" alt="butter-cream icon">
					Butter & Cream
				</div>
			</a>

			<a>
				<div href="#">
					<img src="assets/icons/header/allCategories/cooking.svg" alt="cooking icon">
					Cooking
				</div>
			</a>

			<a class="${categoriesStyles.viewMore}">
				<div href="#">
					<img src="assets/icons/header/allCategories/view-more.svg" alt="view more icon">
					View all Category
				</div>
			</a>

		</div>

	</label>

	`;
};