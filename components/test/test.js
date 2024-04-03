
export const changeBackground = (btn, target, color) => {
	//by click btn change color on target
	const button = document.getElementById(btn);
	const targetElement = document.getElementById(target);
	button.addEventListener('click', () => {
		targetElement.style.backgroundColor = color;
	});
}