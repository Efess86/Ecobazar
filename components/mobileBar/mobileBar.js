import { allCategories } from "../header/allCategories/allCategories";


import barStyles from './mobileBar.module.scss';


export const mobileBar = () => {

	return `
	

	<div class="${barStyles.mobileBarContainer}">
		<div>
			${allCategories()}
		</div>

	
	</div>
	`
}