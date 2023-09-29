import btnStyles from './btn-small.module.scss';


export const btnSmallFill = (btnName) => {
	return `<button class="${btnStyles.btnSmallFill}">${btnName}</button>`
}

export const btnSmallBorder = (btnName) => {
	return `<button class="${btnStyles.btnSmallBorder}">${btnName}</button>`
}

export const btnSmallGhost = (btnName) => {
	return `<button class="${btnStyles.btnSmallGhost}">${btnName}</button>`
}