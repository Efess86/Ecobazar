export const setTimer = (id, timerDays, timerHours, timerMinutes, timerSeconds, timerStyles) => {

	const drawTimer = (timerDays, timerHours, timerMinutes, timerSeconds) => {

		const formatTimerValue = (value) => {
			return value < 10 ? '0' + value : value;
		};

		return `
			<div>
				<p>${formatTimerValue(timerDays)}</p>
				<span>days</span>
			</div>
			<div>
				<p>${formatTimerValue(timerHours)}</p>
				<span>hours</span>
			</div>
			<div>
				<p>${formatTimerValue(timerMinutes)}</p>
				<span>mins</span>
			</div>
			<div>
				<p>${formatTimerValue(timerSeconds)}</p>
				<span>secs</span>
			</div>
		`;
	};

	let intervalId = setInterval(() => {
		if (timerSeconds > 0) {
			timerSeconds--;
		} else {
			if (timerMinutes > 0) {
				timerMinutes--;
				timerSeconds = 59;
			} else {
				if (timerHours > 0) {
					timerHours--;
					timerMinutes = 59;
					timerSeconds = 59;
				} else {
					if (timerDays > 0) {
						timerDays--;
						timerHours = 23;
						timerMinutes = 59;
						timerSeconds = 59;
					} else {
						clearInterval(intervalId);
						console.log('time is over');
						return;
					}
				}
			}
		}

		const timerElement = document.getElementById(id);
		if (timerElement) {
			timerElement.innerHTML = drawTimer(timerDays, timerHours, timerMinutes, timerSeconds);
		};

	}, 1000);

	return `
		<div class="${timerStyles}" id="${id}">${drawTimer(timerDays, timerHours, timerMinutes, timerSeconds)}</div>
	`;

};