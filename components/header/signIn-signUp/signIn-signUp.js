import signStyles from './signIn-signUp.module.scss';

export const signInSignUp = (login, register, loginStyle) => {
	return `
	<div>
		<button id="sign-in-btn" class="${signStyles.btn}" style="${loginStyle}">${login}</button>
		/
		<button id="sign-up-btn" class="${signStyles.btn}" style="${loginStyle}">${register}</button>
	</div>
	`;
};