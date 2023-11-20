import selectInputStyles from './select-input.module.scss';

export const selectInput = (id, selectOptions) => {

	const selectContainer = document.createElement('div');
	selectContainer.classList.add(selectInputStyles.selectContainer);

	const select = document.createElement('select');
	select.classList.add(selectInputStyles.select);
	select.id = id;

	let html = '';
	selectOptions.forEach(item => {
		const option = `<option value="${item}">${item}</option>`;
		html = html + option;
	});

	selectContainer.appendChild(select);
	select.insertAdjacentHTML('beforeend', html);

	return selectContainer;
};