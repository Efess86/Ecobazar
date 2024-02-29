import { allCategories } from "../header/allCategories/allCategories";


import barStyles from './mobileBar.module.scss';


export const mobileBar = (allCategoriesId) => {

	return `
	

	<div class="${barStyles.mobileBarContainer}">
			${allCategories(allCategoriesId)}
	</div>
	`
}