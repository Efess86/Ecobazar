import mainStyles from './main.module.scss';


// import { cardSmallComp } from "./pages/samples_page";
// import { cardMediumComp } from "./pages/samples_page";
import { cardLargeComp } from "./pages/samples_page";
// import { btnSample } from "./pages/samples_page";
// import { setTimerSale } from "./pages/samples_page";

// import { setTimer } from "./components/timer/timer";
// import { setPrice } from "./components/price/price";

const app = document.querySelector('#app');

// app.insertAdjacentHTML('beforeend', cardSmallComp());
// app.insertAdjacentHTML('beforeend', cardMediumComp());
app.insertAdjacentHTML('beforeend', cardLargeComp());
// app.insertAdjacentHTML('beforeend', btnSample());


// app.insertAdjacentHTML('beforeend', setTimerSale("1", "0", "0", "5"));
// app.insertAdjacentHTML('beforeend', setPrice("$12,99", "$29,99", "24"));
// app.insertAdjacentHTML('beforebegin', setTimer('timer112', '2', '7', '12', '9', `${mainStyles.timerContainer}`));

