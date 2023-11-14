import selectInputStyles from './email-input.module.scss';

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



	// select.addEventListener('input', (e) => {
	// 	const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// 	if (regEx.test(e.target.value)) {
	// 		select.style.background = '#20b5261c';
	// 		select.style.border = '1px solid #00B207';
	// 	} else {
	// 		select.style.background = '#EA4B481c';
	// 		select.style.border = '1px solid #EA4B48';
	// 	}
	// })

	selectContainer.appendChild(select);
	select.insertAdjacentHTML('beforeend', html);

	return selectContainer;
};