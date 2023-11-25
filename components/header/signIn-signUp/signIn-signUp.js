import signStyles from './signIn-signUp.module.scss';

export const signInSignUp = (login, register) => {
	return `
	<button id="sign-in-btn" class="${signStyles.btn}">${login}</button>
	/
	<button id="sign-up-btn" class="${signStyles.btn}">${register}</button>
	`;
};