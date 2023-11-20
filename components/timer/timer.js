// Note that timer needs styles when you call it. I make it because I have same functional with diffrent design.

// Timer styles sample: 

// .timerContainer {
// 	display: flex;
// 	justify-content: center;
// 	gap: 10px;

// 	div {
// 		max-width: 60px;
// 		width: 100%;
// 		min-height: 37px;
// 		text-align: center;

// 		p {
// 			font: 500 18px $font-family;
// 		}

// 		span {
// 			font: 500 10px $font-family;
// 			letter-spacing: 2px;
// 			text-transform: uppercase;
// 			color: $secondGreyColor;
// 		}
// 	}

// 	colon {
// 		font: 400 20px $font-family;
// 		color: $secondGreyColor;
// 	}
// }

export const setTimer = (id, timerDays, timerHours, timerMinutes, timerSeconds, timerStyles) => {

	const drawTimer = (timerDays, timerHours, timerMinutes, timerSeconds) => {

		// add 0 before value if value is from 0 to 9
		const formatTimerValue = (value) => {
			return value < 10 ? '0' + value : value;
		};

		// timer body
		return `
			<div>
				<p>${formatTimerValue(timerDays)}</p>
				<span>days</span>
			</div>
			<div>
				<p>${formatTimerValue(timerHours)}</p>
				<span>hours</span>
			</div>
			<colon>:</colon>
			<div>
				<p>${formatTimerValue(timerMinutes)}</p>
				<span>mins</span>
			</div>
			<colon>:</colon>
			<div>
				<p>${formatTimerValue(timerSeconds)}</p>
				<span>secs</span>
			</div>
		`;
	};

	// set timer interval
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

		// get timer id (important timer to have id!) and draw every second
		const timerElement = document.getElementById(id);
		if (timerElement) {
			timerElement.innerHTML = drawTimer(timerDays, timerHours, timerMinutes, timerSeconds);
		};

	}, 1000);

	// return timer with container. Note that timer container take class name then you call the function
	return `
		<div class="${timerStyles}" id="${id}">${drawTimer(timerDays, timerHours, timerMinutes, timerSeconds)}</div>
	`;

};