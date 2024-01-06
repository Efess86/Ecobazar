import { allCategories } from '../../../components/header/allCategories/allCategories';
import { menuNav } from '../../../components/header/menuNav/menuNav';
import { callPhoneSmall } from '../../../components/header/callPhoneSmall/callPhoneSmall';


import barStyles from './bottomBar.module.scss';


export const bottomBar = (bottomBarWrapper, telNumberLink, telNumber, imgStyle) => {


	return `
	<div style="${bottomBarWrapper}">
			<div class="${barStyles.bottomBarContainer}">
					${allCategories()}
					${menuNav()}
					${callPhoneSmall(telNumberLink, telNumber, imgStyle)}
			</div>
		</div>
	`;
}