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

import { search } from './components/header/search/search';
app.insertAdjacentHTML('beforeend', search('Search...'));