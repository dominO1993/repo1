const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav__list');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	navList.classList.toggle('nav__list--active');
};

allNavItems.forEach(item => {
	item.addEventListener('click', () => {
		navList.classList.remove('nav__list--active');
	});
});

burgerBtn.addEventListener('click', handleNav);
