import timerStyle from './timer.module.scss';

export const setTimer = (timerDays, timerHours, timerMinutes, timerSeconds, timerNumsSize, timerTextSize) => {

	// // Получение элемента, где будет отображаться таймер
	// let timerElement = document.getElementById('timer');

	// // Запуск таймера
	// setInterval(updateTimer, 1000);

	// // Функция обновления таймера
	// function updateTimer() {
	// 	// Уменьшение секунд
	// 	timerSeconds--;

	// 	if (timerSeconds < 0) {
	// 		timerSeconds = 59;
	// 		timerMinutes--;

	// 		if (timerMinutes < 0) {
	// 			timerMinutes = 59;
	// 			timerHours--;

	// 			if (timerHours < 0) {
	// 				timerHours = 23;
	// 				timerDays--;

	// 				if (timerDays < 0) {
	// 					// Таймер закончился
	// 					timerDays = 0;
	// 					timerHours = 0;
	// 					timerMinutes = 0;
	// 					timerSeconds = 0;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	// Обновление отображения таймера
	// 	timerElement.textContent = formatTimerValue(timerDays) + ' : ' +
	// 		formatTimerValue(timerHours) + ' : ' +
	// 		formatTimerValue(timerMinutes) + ' : ' +
	// 		formatTimerValue(timerSeconds);
	// }

	// // Функция форматирования значений таймера
	// function formatTimerValue(value) {
	// 	return value < 10 ? '0' + value : value;
	// }


	return `
	<div class="${timerStyle.container}">
		<div class="${timerStyle.days} ${timerStyle.item}">
			<p style="font-size:${timerNumsSize}px;">${timerDays}</p>
			<span style="font-size:${timerTextSize}px;">days</span>
		</div>
		<div class="${timerStyle.hours} ${timerStyle.item}">
			<p style="font-size:${timerNumsSize}px;">${timerHours}</p>
			<span style="font-size:${timerTextSize}px;">hours</span>
		</div>
		<div class="${timerStyle.minutes} ${timerStyle.item}">
			<p style="font-size:${timerNumsSize}px;">${timerMinutes}</p>
			<span style="font-size:${timerTextSize}px;">mins</span>
		</div>
		<div class="${timerStyle.seconds} ${timerStyle.item}">
			<p style="font-size:${timerNumsSize}px;">${timerSeconds}</p>
			<span style="font-size:${timerTextSize}px;">secs</span>
		</div>
	</div>
	`;
};