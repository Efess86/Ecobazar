import burgerStyles from './burgerIcon.module.scss';


export const burgerIcon = () => {

	return `
	<label class="${burgerStyles.menu}">
		<input type="checkbox" checked>
		<div>
			<span></span>
			<span></span>
		</div>
	</label>

	`;
};