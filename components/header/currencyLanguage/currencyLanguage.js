import currLangStyles from './currencyLanguage.module.scss';


export const setCurrencyLanguage = (selectStyle, optionStyle) => {

	return `
	<div class="${currLangStyles.currencyLanguage}">
		<select id="header-language" style="${selectStyle}">
			<option value="eng" style="${optionStyle}">Eng</option>
			<option value="grc" style="${optionStyle}">Grc</option>
			<option value="jap" style="${optionStyle}">Jap</option>
		</select>
		<select id="header-currency" style="${selectStyle}">
			<option value="usd" style="${optionStyle}">USD</option>
			<option value="eur" style="${optionStyle}">EUR</option>
			<option value="yen" style="${optionStyle}">YEN</option>
		</select>
	</div>
	`;
}