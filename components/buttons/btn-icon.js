import btnStyles from "./btn-icon.module.scss";

export const btnIconSmall = (btnName, btnIcon) => {
	return `
	<button class="${btnStyles.btnIconSmall}">${btnName}
		<img src="${btnIcon}" alt="button icon">
	</button>
	`;
};

export const btnIconMedium = (btnName, btnIcon) => {
	return `
	<button class="${btnStyles.btnIconMedium}">${btnName}
		<img src="${btnIcon}" alt="button icon">
	</button>
	`;
};

export const btnIconLarge = (btnName, btnIcon) => {
	return `
	<button class="${btnStyles.btnIconLarge}">${btnName}
		<img src="${btnIcon}" alt="button icon">
	</button>
	`;
};

