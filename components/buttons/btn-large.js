import btnStyles from './btn-large.module.scss';


export const btnLargeFill = (btnName) => {
	return `<button class="${btnStyles.btnLargeFill}">${btnName}</button>`
};

export const btnLargeBorder = (btnName) => {
	return `<button class="${btnStyles.btnLargeBorder}">${btnName}</button>`
};

export const btnLargeGhost = (btnName) => {
	return `<button class="${btnStyles.btnLargeGhost}">${btnName}</button>`
};