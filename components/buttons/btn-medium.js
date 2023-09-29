import btnStyles from './btn-medium.module.scss';


export const btnMediumFill = (btnName) => {
	return `<button class="${btnStyles.btnMediumFill}">${btnName}</button>`
}

export const btnMediumBorder = (btnName) => {
	return `<button class="${btnStyles.btnMediumBorder}">${btnName}</button>`
}

export const btnMediumGhost = (btnName) => {
	return `<button class="${btnStyles.btnMediumGhost}">${btnName}</button>`
}