export const setTimer = (timerDays, timerHours, timerMinutes, timerSeconds) => {

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