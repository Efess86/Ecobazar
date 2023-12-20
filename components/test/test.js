import styles from './test.module.scss';


export const test = () => {

	return `
	<label class="${styles.menu}">
		<input type="checkbox" checked>
		<div>
			<span></span>
			<span></span>
		</div>
	</label>

	`;
};