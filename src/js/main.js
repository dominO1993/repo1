const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav__list');

const handleNav = () => {
	navList.classList.toggle('nav__list--active');
};

burgerBtn.addEventListener('click', handleNav);
