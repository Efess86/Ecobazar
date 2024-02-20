import menuNavStyles from './menuNav.module.scss';

export const menuNav = () => {
	return `
	<nav class="${menuNavStyles.nav}">

		<div>
			<a href="#">Home</a>
		</div>

		<div>
			<a href="#">Shop</a>
			<img src="/assets/icons/header/select-arrow-grey.svg" alt="select icon">
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
			<img src="/assets/icons/header/select-arrow-grey.svg" alt="select icon">
			<ul class="${menuNavStyles.subMenu}">
				<li> <a href="#">Order History</a> </li>
				<li> <a href="#">Account Settings</a> </li>
				<li> <a href="#">FAQ</a> </li>
			</ul>
		</div>

		<div>
			<a href="#">Blog</a>
			<img src="/assets/icons/header/select-arrow-grey.svg" alt="select icon">
			<ul class="${menuNavStyles.subMenu}">
				<li> <a href="#">Main Blog</a> </li>
				<li> <a href="#">Cooking Blog</a> </li>
				<li> <a href="#">Premium users</a> </li>
			</ul>
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