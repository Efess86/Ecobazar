import { topBar } from './bars/topBar';
import { middleBar } from './bars/middleBar';
import { bottomBar } from './bars/bottomBar';


export const greenHeader = (
	// ------ Top Bar ------
	topBarWrapper,
	imgStyle,
	selectStyle,
	optionStyle,
	login,
	register,
	loginStyle,
	// ------ Middle Bar ------
	middleBarWrapper,
	placeholder,
	itemsAmount,
	currencySign,
	currencyNumber,
	// ------ Bottom Bar ------
	bottomBarWrapper

) => {
	return `
		${topBar(topBarWrapper, imgStyle, selectStyle, optionStyle, login, register, loginStyle)}
		${middleBar(middleBarWrapper, placeholder, itemsAmount, currencySign, currencyNumber)}
		${bottomBar(bottomBarWrapper)}
	`;
}