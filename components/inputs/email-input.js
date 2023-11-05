import emailInputStyles from './email-input.module.scss';

export const emailInput = (id, type, required, placeholder, inputInfoText, inputInfoTextColor) => {
	const inputContainer = document.createElement('div');
	inputContainer.classList.add(emailInputStyles.inputContainer);

	const inputInfo = document.createElement('span');
	inputInfo.classList.add(emailInputStyles.inputInfo);
	inputInfo.textContent = inputInfoText;
	inputInfo.style.color = inputInfoTextColor;

	const input = document.createElement('input');
	input.classList.add(emailInputStyles.input);
	input.type = type;
	input.id = id;
	if (required) {
		input.required = true;
	}
	input.placeholder = placeholder;

	const inputIcon = document.createElement('img');





	input.addEventListener('focus', (el) => {
		el.target.classList.remove(emailInputStyles.invalidInput);
		el.target.classList.add(emailInputStyles.validInput);
	});

	input.addEventListener('blur', (el) => {
		el.target.classList.remove(emailInputStyles.validInput);
		el.target.classList.add(emailInputStyles.invalidInput);
	});

	inputContainer.appendChild(input);
	inputContainer.appendChild(inputInfo);


	const formValidation = () => {

	}


	return inputContainer;
};