import { burgerIcon } from '../../../components/header/burgerIcon/burgerIcon';
import { menuNav } from '../../../components/header/menuNav/menuNav';


import barStyles from './bottomBar.module.scss';


export const bottomBar = (bottomBarWrapper) => {


	return `
	<div style="${bottomBarWrapper}">
			<div class="${barStyles.bottomBarContainer}">
					${burgerIcon()}
					${menuNav()}
			</div>
		</div>
	`;
}