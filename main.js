import { cardSmallComp } from "./pages/samples_page";
import { cardMediumComp } from "./pages/samples_page";
import { btnSample } from "./pages/samples_page";


const app = document.querySelector('#app');

app.insertAdjacentHTML('beforeend', cardSmallComp());
app.insertAdjacentHTML('beforeend', cardMediumComp());
app.insertAdjacentHTML('beforeend', btnSample());
