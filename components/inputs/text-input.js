import textInputStyles from './text-input.module.scss';

export const textInput = (id, type, required, placeholder) => {
	const inputContainer = document.createElement('div');
	inputContainer.classList.add(textInputStyles.inputContainer);

	const input = document.createElement('input');
	input.classList.add(textInputStyles.input);
	input.type = type;
	input.id = id;
	if (required) {
		input.required = true;
	}
	input.placeholder = placeholder;

	input.addEventListener('focus', (el) => {
		el.target.classList.remove(textInputStyles.invalidInput);
		el.target.classList.add(textInputStyles.validInput);
	});

	input.addEventListener('blur', (el) => {
		el.target.classList.remove(textInputStyles.validInput);
		el.target.classList.add(textInputStyles.invalidInput);
	});

	inputContainer.appendChild(input);

	return inputContainer;
};