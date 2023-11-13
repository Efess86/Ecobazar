import emailInputStyles from './email-input.module.scss';

export const emailInput = (id, required, placeholder, inputInfoText, inputInfoTextColor) => {
	const inputContainer = document.createElement('div');
	inputContainer.classList.add(emailInputStyles.inputContainer);

	const inputInfo = document.createElement('span');
	inputInfo.classList.add(emailInputStyles.inputInfo);
	inputInfo.style.color = inputInfoTextColor;

	const input = document.createElement('input');
	input.classList.add(emailInputStyles.input);
	input.type = 'email';
	input.id = id;
	if (required) {
		input.required = true;
	}
	input.placeholder = placeholder;

	const inputIcon = document.createElement('img');
	inputIcon.classList.add(emailInputStyles.inputIcon);
	inputIcon.src = 'assets/icons/inputs/alert-circle.svg';
	input.style.background = '#FF8A001F';
	input.style.border = '1px solid #FF8A00';
	inputInfo.textContent = 'Validation warning';
	inputInfo.style.color = '#FF8A00';


	input.addEventListener('input', (e) => {
		const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (regEx.test(e.target.value)) {
			inputIcon.src = 'assets/icons/inputs/alert-check.svg';
			input.style.background = '#20b5261c';
			input.style.border = '1px solid #00B207';
			inputInfo.textContent = 'Validation success';
			inputInfo.style.color = '#00B207';
		} else {
			inputIcon.src = 'assets/icons/inputs/alert-triangle.svg';
			input.style.background = '#EA4B481c';
			input.style.border = '1px solid #EA4B48';
			inputInfo.textContent = 'Validation error';
			inputInfo.style.color = '#EA4B48';
		}
	})

	inputContainer.appendChild(inputIcon);
	inputContainer.appendChild(input);
	inputContainer.appendChild(inputInfo);




	return inputContainer;
};