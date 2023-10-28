import timerStyle from './timer.module.scss';

export const setTimer = (timerDays, timerHours, timerMinutes, timerSeconds) => {

	const formatTimerValue = (value) => {
		return value < 10 ? '0' + value : value;
	};

	return `
		<div class="${timerStyle.days}">
			<p>${formatTimerValue(timerDays)}</p>
			<span>days</span>
		</div>
		<div class="${timerStyle.hours}">
			<p>${formatTimerValue(timerHours)}</p>
			<span>hours</span>
		</div>
		<div class="${timerStyle.minutes}">
			<p>${formatTimerValue(timerMinutes)}</p>
			<span>mins</span>
		</div>
		<div class="${timerStyle.seconds}">
			<p>${formatTimerValue(timerSeconds)}</p>
			<span>secs</span>
		</div>
		`;
};