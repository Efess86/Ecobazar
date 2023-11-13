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
	input.style.background = 'rgba(255, 255, 255)';

	const inputIcon = document.createElement('img');
	inputIcon.src = '/assets/icons/inputs/success-icon.svg';
	inputIcon.classList.add(textInputStyles.inputIcon);
	inputIcon.style.opacity = 0;

	input.addEventListener('input', (e) => {
		if (e.target.value == '') {
			inputIcon.style.opacity = 0;
			input.style.background = 'rgba(255, 255, 255)';
		} else {
			inputIcon.style.opacity = 1;
			input.style.background = 'rgba(0, 178, 7, 0.05)';
		}
	});
	inputContainer.appendChild(input);
	inputContainer.appendChild(inputIcon);

	return inputContainer;
};