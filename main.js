import mainStyles from './main.module.scss';

const app = document.getElementById('app');

// ================ samples_page import ================
// import { cardSmallComp } from "./pages/samples_page";
// import { cardMediumComp } from "./pages/samples_page";
// import { cardLargeComp } from "./pages/samples_page";
// import { btnSample } from "./pages/samples_page";
// import { setTimerSale } from "./pages/samples_page";


// =================== Direct import ===================
// import { setTimer } from "./components/timer/timer";
// import { setPrice } from "./components/price/price";
// import { showSocial } from './components/social/social';
import { textInput } from './components/inputs/text-input';




// ===================== samples_page DRAW ================
// app.insertAdjacentHTML('beforeend', cardSmallComp());
// app.insertAdjacentHTML('beforeend', cardMediumComp());
// app.insertAdjacentHTML('beforeend', cardLargeComp());
// app.insertAdjacentHTML('beforeend', btnSample());

// ===================== Direct DRAW =======================
// app.insertAdjacentHTML('beforeend', setTimerSale("1", "0", "0", "5"));
// app.insertAdjacentHTML('beforeend', setPrice("$12,99", "$29,99", "24"));
// app.insertAdjacentHTML('beforebegin', setTimer('timer112', '2', '7', '12', '9', `${mainStyles.timerContainer}`));
// app.append(setTimer('timer112', '2', '7', '12', '9', `${mainStyles.timerContainer}`));
// app.insertAdjacentHTML('beforeend', showSocial('_blank', '_self', '_blank', '_self', 'https://www.facebook.com', 'https://twitter.com', 'https://www.pinterest.com', 'https://www.instagram.com'));

app.appendChild(textInput('id1', 'text', 'required', "Enter your name"));
app.appendChild(textInput('id2', 'number', '', "Enter amount"));


