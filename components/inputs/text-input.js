// import textInputStyles from './text-input.module.scss';

// export const textInput = (id, type, required, placeholder) => {

// 	id.addEventListener('blur', () => {
// 		if (id !== '') {
// 			id.classList.remove(textInputStyles.invalidInput);
// 			id.classList.add(textInputStyles.validInput);
// 		} else {
// 			id.classList.remove(textInputStyles.validInput);
// 			id.classList.add(textInputStyles.invalidInput);
// 		}
// 	});

// 	return `
// 		<input class='${textInputStyles.input}' type="${type}" id="${id}" ${required} placeholder="${placeholder}">
// 	`;
// };


// const input = document.getElementById(id);
// if (input && input.value !== '') {
// 	input.classList.remove(textInputStyles.invalidInput);
// 	input.classList.add(textInputStyles.validInput);
// } else if (input) {
// 	input.classList.remove(textInputStyles.validInput);
// 	input.classList.add(textInputStyles.invalidInput);
// }

import textInputStyles from './text-input.module.scss';

export const textInput = (id, type, required, placeholder) => {
	const inputElement = document.querySelectorAll(`input#${id}`);
	console.log(inputElement);




	return `
    	<input 
			class='${textInputStyles.input}' 
			type="${type}" 
			id="${id}" 
			${required ? 'required' : ''} 
			placeholder="${placeholder}" 
		>
  	`;
};