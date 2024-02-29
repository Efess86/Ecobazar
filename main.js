import mainStyles from './main.module.scss';

const app = document.getElementById('app');

// ================ samples_page import ================
// import { cardSmallComp } from "./pages/samples_page";
// import { cardMediumComp } from "./pages/samples_page";
// import { cardLargeComp } from "./pages/samples_page";
// import { btnSample } from "./pages/samples_page";


// =================== Direct import ===================
// import { setTimer } from "./components/timer/timer";
// import { setPrice } from "./components/price/price";
// import { drawSocial } from './components/social/social';
// import { textInput } from './components/inputs/text-input';
// import { emailInput } from './components/inputs/email-input';




// ===================== samples_page DRAW ================
// app.insertAdjacentHTML('beforeend', cardSmallComp());
// app.insertAdjacentHTML('beforeend', cardMediumComp());
// app.insertAdjacentHTML('beforeend', cardLargeComp());
// app.insertAdjacentHTML('beforeend', btnSample());

// ===================== Direct DRAW =======================
// app.insertAdjacentHTML('beforeend', setPrice("$12,99", "$29,99", "24"));
// app.insertAdjacentHTML('beforebegin', setTimer('timer112', '2', '7', '12', '9', `${mainStyles.timerContainer}`));
// app.appendChild(drawSocial());

// app.appendChild(textInput('id1', 'text', 'required', "Enter your name"));
// app.appendChild(textInput('id2', 'number', '', "Enter amount (numbers only)"));
// app.appendChild(textInput('id3', 'text', '', "Enter something",));
// app.appendChild(emailInput('id-223b', true, 'Enter your email'));




// ====================== Select Input ==================
// import { selectInput } from './components/inputs/select-input';
// app.insertAdjacentHTML('beforeend', selectInput('id-1-select', ['Strawberry', 'Lemons', 'Grapes', 'Apples']));
// let selectRes = 'Strawberry'; // set default value (must be a first value in array that u pass when call func)
// const selectElement = document.getElementById('id-1-select');
// console.log(selectRes);
// selectElement.addEventListener('change', (e) => {
// 	selectRes = e.target.value;
// 	console.log(selectRes);
// });


// ============= Currency / Language (header) ==============
// import { setCurrencyLanguage } from './components/header/currencyLanguage/currencyLanguage';
// app.insertAdjacentHTML('beforeend', setCurrencyLanguage());

// let currency = 'usd';
// let language = 'eng';

// const currencyState = document.getElementById('header-currency');
// const languageState = document.getElementById('header-language');

// console.log(currency);
// currencyState.addEventListener('change', (e) => {
// 	currency = e.target.value;
// 	console.log(currency);
// });

// console.log(language);
// languageState.addEventListener('change', (e) => {
// 	language = e.target.value;
// 	console.log(language);
// });

// =============== Sign-In / Sign-Up (header) ===============
// import { signInSignUp } from './components/header/signIn-signUp/signIn-signUp';
// app.insertAdjacentHTML('beforeend', signInSignUp('Sign in', 'Sign Up'));

// =============== Search (header) ===============
// import { search } from './components/header/search/search';
// app.insertAdjacentHTML('beforeend', search('Search...'));

// =============== Cart Icon (header) ===============
// import { cartIcon } from './components/header/cartIcon/cartIcon';
// app.insertAdjacentHTML('beforeend', cartIcon(2));


// =============== Cart Amount (header) ===============
// import { cartAmount } from './components/header/cartAmmount/cartAmount';
// app.insertAdjacentHTML('beforeend', cartAmount('$', '34.28'));

// ================ Call Phone (header) ================
// import { callPhone } from './components/header/callPhone/callPhone';
// app.insertAdjacentHTML('beforeend', callPhone(2195550114, '(219) 555-0114'));

// ================ Call Phone (header) ================
// import { callPhoneSmall } from './components/header/callPhoneSmall/callPhoneSmall';
// app.insertAdjacentHTML('beforeend', callPhoneSmall(2195550114, '(219) 555-0114', 'filter: brightness(0) invert(1); color:white;'));

// ================ Favourites (header) ================
// import { favourites } from './components/header/favourites/favourites';
// app.insertAdjacentHTML('beforeend', favourites());


// ******************** Header top bar ********************
// import { topBar } from './pages/headers/bars/topBarComponent/topBarComponent';
// app.insertAdjacentHTML('beforeend', topBarComponent(

// 	// 								----- Top bar -----
// 	'SignIn', 										// Login text
// 	'Sign Up', 										// Register text
// 	'color:#FFFFFF;', 								// styles of login and register
// 	'filter: brightness(0) invert(1);', 			// Location icon color
// 	'background-color: #00B207; color: #FFFFFF; ',  // background-color and text color
// 	'color:#FFFFFF;', 								// styles of select
// 	'color:#000000;', 								// styles of options

// 	// 								----- Middle bar -----
// 	'background-color: #ffffff;',					// background-color
// 	'Search...',									// search placeholder text
// 	'$',											// currency sign
// 	'29.99',										// currency number
// 	'4',											// number of products added in basket

// 	// 								----- Bottom bar -----
// 	'background-color: #F1F1F1;'					// background-color
// ));




import { greenHeader } from './pages/headers/greenHeader';
app.insertAdjacentHTML('beforeend', greenHeader(
	// ================================ Top bar =========================================
	'background-color: #00B207; color: #FFFFFF; ',  // Background-color and text color
	'filter: brightness(0) invert(1);', 			// Location icon color
	'color:#FFFFFF;', 								// Select styles
	'color:#000000;', 								// Options styles
	'Sign In ', 									// Login text
	' Sign Up', 									// Register text
	'color:#FFFFFF;', 								// Login and register styles
	// =============================== Middle bar =======================================
	'background-color: #ffffff;',					// Background-color
	'Search...',									// Search placeholder text
	'4',											// Number of products added in basket
	'$',											// Currency symbol
	'29.99',										// Currency number
	// =============================== Bottom bar ========================================
	'background-color: #F1F1F1;',					// Background-color
	'(219) 555-0114',							    // phone number in href="tel:+1-650-253-0000"
	'(219) 555-0114',								// phone number to show
	'', 											// phone styles
	'allCategoryTopBarId'								// allCategories Id
));


// document.addEventListener('change', () => {
// 	const element = document.getElementById('allCategoriesMenu');
// 	const checkbox = document.getElementById('burger-menu-icon');

// 	if (checkbox.checked) {
// 		console.log('checked');
// 		element.style = 'transform: translateX(-100%); opacity: 0; pointer-events: none;';
// 	} else {
// 		element.style = 'transform: translateX(0); opacity: 1; pointer-events: auto;';
// 		console.log('not checked');
// 	}

// });

import { mobileBar } from './components/mobileBar/mobileBar';
app.insertAdjacentHTML('beforeend', mobileBar('allCategoriesMobileBarId'));