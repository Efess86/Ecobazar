import currLangStyles from './currencyLanguage.module.scss';


export const setCurrencyLanguage = () => {

	return `
	<div class="${currLangStyles.currencyLanguage}">
		<select id="header-language">
			<option value="eng">Eng</option>
			<option value="grc">Grc</option>
			<option value="jap">Jap</option>
		</select>
		<select id="header-currency">
			<option value="usd">USD</option>
			<option value="eur">EUR</option>
			<option value="yen">YEN</option>
		</select>
	</div>
	`;
}