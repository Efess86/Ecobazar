import selectInputStyles from './select-input.module.scss';

export const selectInput = (id, selectOptions) => {

	let html = '';
	selectOptions.forEach(item => {
		const option = `<option value="${item}">${item}</option>`;
		html = html + option;
	});

	return `
	<select id="${id}" class="${selectInputStyles.select}">${html}</select>
	`;
};