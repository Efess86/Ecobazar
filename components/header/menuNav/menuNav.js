import menuNavStyles from './menuNav.module.scss';

export const menuNav = () => {
	return `
	<nav class="${menuNavStyles.nav}">

		<div>
			<a href="#">Home</a>
		</div>

		<div>
			<a href="#">Shop</a>
			<div class="${menuNavStyles.subMenu}">
				<a href="#">Vegetables</a>	
				<a href="#">Fruits</a>	
				<a href="#">Meat</a>	
				<a href="#">Low fat food</a>	
				<a href="#">Vegetarian</a>	
			</div>
		</div>

		<div>
			<a href="#">Pages</a>
			<div class="${menuNavStyles.subMenu}">
				<a href="#">Order History</a>
				<a href="#">Account Settings</a>
				<a href="#">FAQ</a>
			</div>
		</div>

		<div>
			<a href="#">Blog</a>
			<div class="${menuNavStyles.subMenu}">
				<a href="#">Main Blog</a>
				<a href="#">Cooking Blog</a>
				<a href="#">Premium users</a>
			</div>
		</div>

		<div>
			<a href="#">About us</a>
		</div>

		<div>
			<a href="#">Contact us</a>
		</div>

	</nav>
	`;
}