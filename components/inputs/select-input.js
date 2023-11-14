import selectInputStyles from './email-input.module.scss';

export const selectInput = (id, required, placeholder, []) => {
	const selectContainer = document.createElement('div');
	selectContainer.classList.add(selectInputStyles.selectContainer);

	const select = document.createElement('select');
	input.classList.add(selectInputStyles.select);
	input.type = 'select';
	input.id = id;
	if (required) {
		input.required = true;
	}
	input.placeholder = placeholder;

	const inputIcon = document.createElement('img');
	inputIcon.classList.add(selectInputStyles.inputIcon);
	inputIcon.src = 'assets/icons/inputs/alert-circle.svg';
	input.style.background = '#FF8A001F';
	input.style.border = '1px solid #FF8A00';


	input.addEventListener('input', (e) => {
		const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (regEx.test(e.target.value)) {
			inputIcon.src = 'assets/icons/inputs/alert-check.svg';
			input.style.background = '#20b5261c';
			input.style.border = '1px solid #00B207';
		} else {
			inputIcon.src = 'assets/icons/inputs/alert-triangle.svg';
			input.style.background = '#EA4B481c';
			input.style.border = '1px solid #EA4B48';
		}
	})

	selectContainer.appendChild(inputIcon);
	selectContainer.appendChild(select);

	return selectContainer;
};