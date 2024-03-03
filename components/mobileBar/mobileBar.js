import { allCategoriesMobile } from './allCategoriesMobile/allCategoriesMobile';


import barStyles from './mobileBar.module.scss';


export const mobileBar = () => {

	return `
	<div class="${barStyles.mobileBarContainer}">
		${allCategoriesMobile()}
		<div class="${barStyles.testa}">X</div>
		<div class="${barStyles.testa}">Y</div>
		<div class="${barStyles.testa}">Z</div>
	</div>
	`
}