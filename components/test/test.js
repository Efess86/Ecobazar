import styles from './test.module.scss';


export const createElem = (type, content, attName, attValue, className, parrentId) => {
	const element = document.createElement(type);
	element.setAttribute(attName, attValue);
	element.className = styles.headLabel;
	element.textContent = content;

	const parrentElem = document.getElementById(parrentId);
	parrentElem.appendChild(element);
};