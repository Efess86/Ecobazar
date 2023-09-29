import { cardsSample, btnSample } from "./pages/samples_page";


const app = document.querySelector('#app');

app.insertAdjacentHTML('beforeend', cardsSample());
app.insertAdjacentHTML('beforeend', btnSample());